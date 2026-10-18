import { useLocalization, useLocale, languagePath } from "../i18n/Locale.jsx";
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { company } from '../data/company.js';
import { arabicName, profileUrl } from '../data/brochure.js';
import Brand from './Brand.jsx';
export default function Footer() {
  const localize = useLocalization();
  const { arabic } = useLocale();
  const location = useLocation();
  return localize(<footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand light /><p className="company-arabic" lang="ar" dir="rtl">{arabicName}</p><p>{company.description}</p><span className="footer-tag">Building today <b>—</b> supporting tomorrow</span></div><div className="footer-col"><span className="eyebrow">Explore</span><Link to="/about">About SSMGC</Link><Link to="/services">Our services</Link><Link to="/epc">EPC contracting</Link><Link to="/projects">Projects</Link><Link data-language-switch to={languagePath(location.pathname, !arabic) + location.search + location.hash} lang={arabic ? "en" : "ar"}>{arabic ? "English" : "العربية"}</Link><a href={profileUrl} download>Download company profile</a></div><div className="footer-col"><span className="eyebrow">Contact</span><a href={`mailto:${company.email}`}><Mail size={16} />{company.email}</a><a href={`tel:${company.phones[0]}`}><Phone size={16} />{company.phones[0]}</a><a href={`tel:${company.phones[1]}`}><Phone size={16} />{company.phones[1]}</a></div><div className="footer-col footer-location"><span className="eyebrow">Head office</span><span><MapPin size={16} />Buraydah, Al-Qassim Region<br />Kingdom of Saudi Arabia</span><Link to="/contact" className="footer-contact-link">Talk to our team <ArrowUpRight size={16} /></Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} SSMGC. All rights reserved.</span><span>Suha Saeed Marzouq Al-Harbi General Contracting Company</span></div></footer>);
}
