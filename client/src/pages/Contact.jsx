import { useLocalization } from "../i18n/Locale.jsx";
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Reveal from '../components/Reveal.jsx';
import { company } from '../data/company.js';
export default function Contact() {
  const localize = useLocalization();
  return localize(<><PageHero kicker="Contact SSMGC" title={<>Let’s talk about<br />what comes next.</>} text="Tell us about your project, service needs or support requirements. Our team is ready to hear from you." image="photo-1486406146926-c627a92ad1ab" compact />
    <section className="section-pad contact-section"><div className="container contact-layout"><Reveal className="contact-aside"><span className="eyebrow">Get in touch</span><h2>Start a conversation.</h2><p>Share a little about what you need, and the SSMGC team will get back to you.</p><div className="contact-method"><span><Mail size={18} /></span><div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div></div><div className="contact-method"><span><Phone size={18} /></span><div><small>Phone</small>{company.phones.map(phone => <a key={phone} href={`tel:${phone}`}>{phone}</a>)}</div></div><div className="contact-offices">{company.locations.map(loc => <div key={loc.name}><span><MapPin size={17} /></span><div><b>{loc.name}</b><p>{loc.address}</p></div></div>)}</div><div className="map-placeholder"><div className="map-lines" /><MapPin size={27} /><span>Saudi Arabia</span><small>Buraydah · Yanbu Al Bahr</small></div></Reveal><Reveal className="contact-form-wrap" delay={.1}><div className="contact-form-heading"><span className="eyebrow">Project inquiry</span><h2>How can we help?</h2></div><ContactForm /></Reveal></div></section>
  </>);
}
