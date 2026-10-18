import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function CTASection() {
  const localize = useLocalization();
  return localize(<section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">Let’s build with purpose</span><h2>Have a project in mind?</h2><p>Talk with our team about construction, engineering or industrial support in Saudi Arabia.</p></div><Link className="button button-light" to="/contact">Tell us about it <ArrowUpRight size={17} /></Link><span className="cta-geometry" /></div></section>);
}
