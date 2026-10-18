import { useLocalization, useLocale } from "../i18n/Locale.jsx";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services.js';
const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  company: z.string().optional(),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().min(5, 'Enter a phone number.'),
  service: z.string().min(1, 'Choose a service.'),
  message: z.string().min(10, 'Please add a little more detail (at least 10 characters).')
});
export default function ContactForm() {
  const { arabic } = useLocale();
  const localize = useLocalization();
  const [sent, setSent] = useState(false);
  const [apiError, setApiError] = useState('');
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });
  const submit = async values => {
    setApiError('');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || ''}/api/contact`, values);
      setSent(true);
      reset();
    } catch (error) {
      setApiError(arabic ? 'The inquiry could not be sent right now. Please contact us by phone or email.' : error.response?.data?.message || 'The inquiry could not be sent right now. Please contact us by phone or email.');
    }
  };
  if (sent) return localize(<div className="form-success"><CheckCircle2 size={34} /><h3>Thank you for reaching out.</h3><p>Your inquiry has been received. The SSMGC team will be in touch.</p><button className="text-link" onClick={() => setSent(false)}>Send another inquiry <ArrowUpRight size={16} /></button></div>);
  return localize(<form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
    <div className="form-grid"><Field label="Your name" name="name" register={register} error={errors.name} placeholder="Full name" /><Field label="Company" name="company" register={register} placeholder="Company name" /><Field label="Email address" name="email" type="email" register={register} error={errors.email} placeholder="name@company.com" /><Field label="Phone number" name="phone" type="tel" register={register} error={errors.phone} placeholder="+966 ..." /><label className="field"><span>Service of interest</span><select {...register('service')} defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select>{errors.service && <small>{errors.service.message}</small>}</label><Field label="How can we help?" name="message" register={register} error={errors.message} placeholder="Tell us a little about your project or requirements" textarea /></div>
    {apiError && <p className="form-error form-api-error" role="alert">{apiError}</p>}<button className="button form-submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send inquiry'} <ArrowUpRight size={17} /></button><p className="form-privacy">Your details will only be used to respond to your inquiry.</p>
  </form>);
}
function Field({
  label,
  name,
  register,
  error,
  placeholder,
  type = 'text',
  textarea = false
}) {
  const localize = useLocalization();
  const Tag = textarea ? 'textarea' : 'input';
  return localize(<label className={`field ${textarea ? 'field-full' : ''}`}><span>{label}</span><Tag {...register(name)} type={textarea ? undefined : type} placeholder={placeholder} rows={textarea ? 4 : undefined} />{error && <small>{error.message}</small>}</label>);
}
