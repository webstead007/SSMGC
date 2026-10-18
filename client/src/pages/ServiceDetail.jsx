import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowRight, Check } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';
import { brochureScopes, brochureNotes } from '../data/brochure.js';
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
    <section className="detail-approach"><div className="container"><SectionHeading kicker="How we work" title="Delivery shaped around your project." text="We coordinate the scope, resources and execution details with your team to support clear and dependable delivery." /><div className="approach-steps">{['Understand the scope', 'Coordinate resources', 'Execute with care', 'Support handover'].map((step, i) => <div key={step}><span>0{i + 1}</span><h3>{step}</h3></div>)}</div></div></section>
    {related.length > 0 && <section className="section-pad related-services"><div className="container"><SectionHeading kicker="Complementary capabilities" title="Related services" /><div className="service-directory-grid">{related.map((item, i) => <ServiceCard key={item.slug} service={item} index={i} />)}</div></div></section>}
  </>);
}
