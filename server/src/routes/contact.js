import { Router } from 'express';
import { rateLimit } from 'express-rate-limit';
import { createInquiry } from '../controllers/contactController.js';

const router = Router();
const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-7', legacyHeaders: false, message: { message: 'Too many inquiries from this connection. Please try again later.' } });
router.post('/', contactLimiter, createInquiry);
export default router;
