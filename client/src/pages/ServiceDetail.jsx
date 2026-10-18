import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowRight, Check, MessagesSquare, Network, HardHat, ClipboardCheck } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';
import { brochureScopes, brochureNotes } from '../data/brochure.js';
const approach = [
  { title: 'Understand the scope', text: 'Align on your requirements, site conditions and priorities before work begins.', icon: MessagesSquare },
  { title: 'Coordinate resources', text: 'Bring the right people, materials and equipment together around the agreed scope.', icon: Network },
  { title: 'Execute with care', text: 'Coordinate site activities with attention to safety, quality and clear communication.', icon: HardHat },
  { title: 'Support handover', text: 'Coordinate final checks and documentation to support a clear project handover.', icon: ClipboardCheck }
];
export default function ServiceDetail() {
  const localize = useLocalization();
  const {
    slug
  } = useParams();
  const service = services.find(item => item.slug === slug);
  if (!service) return localize(<Navigate to="/services" replace />);
  const related = services.filter(item => item.slug !== slug && item.category === service.category).slice(0, 3);
  return localize(<><PageHero kicker={`${service.category} · SSMGC`} title={service.title} text={service.summary} image={service.image} compact />
    <section className="section-pad detail-overview"><div className="container detail-layout"><Reveal className="detail-intro"><span className="eyebrow">Service overview</span><h2>Practical capability.<br /><span>Reliable support.</span></h2><p>{brochureNotes[service.slug] || service.summary}</p><Link to="/contact" className="text-link">Discuss your requirements <ArrowRight size={18} /></Link></Reveal><Reveal className="detail-capabilities" delay={.1}><SectionHeading kicker="Scope of capability" title="What we can support" /><ul>{(brochureScopes[service.slug] || service.capabilities).map(item => <li key={item}><span><Check size={18} /></span>{item}</li>)}</ul></Reveal></div></section>
    <section className="detail-approach approach-refresh"><div className="container"><div className="approach-heading"><SectionHeading kicker="How we work" title="Delivery shaped around your project." text="We coordinate the scope, resources and execution details with your team to support clear and dependable delivery." /><Link className="approach-cta" to="/contact">Discuss your requirements <ArrowRight size={20} /></Link></div><ol className="approach-journey">{approach.map(({ title, text, icon: Icon }, i) => <li key={title}><Reveal delay={i * .08} className="approach-panel"><div className="approach-panel-top"><span className="approach-symbol"><Icon size={30} strokeWidth={1.6} /></span><span className="approach-number" aria-hidden="true">0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><span className="approach-track" aria-hidden="true"><i /></span></Reveal></li>)}</ol></div></section>
    {related.length > 0 && <section className="section-pad related-services"><div className="container"><SectionHeading kicker="Complementary capabilities" title="Related services" /><div className="service-directory-grid">{related.map((item, i) => <ServiceCard key={item.slug} service={item} index={i} />)}</div></div></section>}
  </>);
}
