import nodemailer from 'nodemailer';
import { z } from 'zod';
import ContactInquiry from '../models/ContactInquiry.js';

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(120), company: z.string().trim().max(160).optional().default(''), email: z.string().trim().email().max(254), phone: z.string().trim().min(5).max(40), service: z.string().trim().min(1).max(120), message: z.string().trim().min(10).max(5000),
});

export async function createInquiry(req, res, next) {
  try {
    const parsed = inquirySchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: 'Please check the inquiry details and try again.', issues: parsed.error.flatten().fieldErrors });
    if (ContactInquiry.db.readyState !== 1) return res.status(503).json({ message: 'Inquiry submission is temporarily unavailable. Please contact SSMGC by phone or email.' });
    const inquiry = await ContactInquiry.create(parsed.data);
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: Number(process.env.SMTP_PORT) === 465, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
        await transporter.sendMail({ from: process.env.SMTP_USER, to: process.env.INQUIRY_TO || 'info@ssmgcc.com', replyTo: inquiry.email, subject: `Website inquiry: ${inquiry.service}`, text: `Name: ${inquiry.name}\nCompany: ${inquiry.company || 'Not provided'}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nService: ${inquiry.service}\n\n${inquiry.message}` });
      } catch (mailError) { console.error('Inquiry email delivery failed; inquiry was saved:', mailError); }
    }
    return res.status(201).json({ message: 'Inquiry received.', id: inquiry.id });
  } catch (error) { return next(error); }
}
