import { useLocalization } from "../i18n/Locale.jsx";
import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';
const categories = ['All', 'Construction', 'Specialized', 'Support'];
export default function Services() {
  const localize = useLocalization();
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => active === 'All' ? services : services.filter(service => service.category === active), [active]);
  return localize(<><PageHero kicker="Our services" title={<>One team.<br />Connected capabilities.</>} text="Construction, engineering, industrial services and practical project support, aligned around your requirements." image="photo-1504307651254-35680f356dfd" />
    <section className="section-pad service-directory"><div className="container"><div className="directory-header"><SectionHeading kicker="Built around the work" title="Capabilities for every stage." text="Explore SSMGC’s construction disciplines, specialized services and project support." /><div className="filter-tabs" role="group" aria-label="Filter services">{categories.map(c => <button key={c} onClick={() => setActive(c)} aria-pressed={active === c} className={active === c ? 'active' : ''}>{c}</button>)}</div></div><div className="service-directory-grid">{filtered.map((service, i) => <Reveal key={service.slug} delay={i % 3 * .05}><ServiceCard service={service} index={services.indexOf(service)} /></Reveal>)}</div></div></section>
    <section className="services-note"><div className="container services-note-inner"><div><span className="eyebrow eyebrow-light">Project delivery</span><h2>Looking for integrated<br />EPC support?</h2><p>Coordinate engineering, procurement, construction and handover with one project delivery approach.</p></div><a className="text-link text-link-light" href="/epc">Explore EPC contracting <ArrowRight size={16} /></a></div></section>
  </>);
}
