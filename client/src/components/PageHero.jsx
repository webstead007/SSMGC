import { useLocalization } from "../i18n/Locale.jsx";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function PageHero({
  kicker,
  title,
  text,
  image = 'photo-1504307651254-35680f356dfd',
  compact = false,
  children
}) {
  const localize = useLocalization();
  return localize(<section className={`page-hero ${compact ? 'page-hero-compact' : ''}`} style={{
    '--page-image': `url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=2200&q=88)`
  }}><div className="page-hero-grid" /><div className="container page-hero-content"><span className="eyebrow eyebrow-light">{kicker}</span><h1>{title}</h1>{text && <p>{text}</p>}{children || <Link className="text-link text-link-light" to="/contact">Start a conversation <ArrowRight size={16} /></Link>}</div><span className="hero-coordinate">SAUDI ARABIA <i /> SSMGC</span></section>);
}
