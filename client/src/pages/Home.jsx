import { useLocalization, useLocale } from "../i18n/Locale.jsx";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Building2, HardHat, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { company } from '../data/company.js';
import { arabicName, profileUrl } from '../data/brochure.js';
import { projects } from '../data/projects.js';
import { ProjectCard } from './Projects.jsx';
import { epcStages, services } from '../data/services.js';
const image = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500&q=85`;
const featured = services.slice(0, 4);
export default function Home() {
  const localize = useLocalization();
  const { arabic } = useLocale();
  return localize(<div className="home-refresh">
    <section className="fresh-hero" id="top">
      <div className="fresh-hero-photo" style={{
        backgroundImage: `url(${image('photo-1504307651254-35680f356dfd')})`
      }} />
      <div className="fresh-hero-wash" /><div className="hero-orbits" aria-hidden="true"><i /><i /><i /></div>
      <div className="container fresh-hero-inner">
        <motion.div className="fresh-hero-copy" initial={{
          opacity: 0,
          y: 26
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .7
        }}>
          <span className="fresh-kicker"><i /> CONSTRUCTION · ENGINEERING · INDUSTRIAL SUPPORT</span>
          <h1>Built for the<br /><em>work ahead.</em></h1>
          <p>One capable partner for construction, engineering and industrial services across Saudi Arabia.</p>
          <p className="hero-arabic-name" lang="ar" dir="rtl">{arabicName}</p><div className="fresh-actions"><Link className="fresh-button" to="/services">Explore our services <ArrowUpRight size={17} /></Link><Link className="fresh-text-link" to="/contact">Let’s talk <ArrowRight size={16} /></Link></div>
        </motion.div>
        <div className="fresh-hero-note"><span>01 — 04</span><i /> BUILT ON EXPERIENCE. DRIVEN BY COMMITMENT.</div>
        <div className="fresh-hero-scroll"><a href="#capabilities">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
      </div>
      <div className="fresh-hero-edge"><span>SAUDI ARABIA</span><b>SSMGC</b></div>
    </section>

    <section className="fresh-proof" aria-label="SSMGC commitments"><div className="container fresh-proof-inner"><span className="fresh-proof-lead">A reliable partner<br /><b>at every stage.</b></span><div><span className="icon-badge"><ShieldCheck /></span><span>Safety-led<br />execution</span></div><div><span className="icon-badge"><BadgeCheck /></span><span>Quality in<br />every detail</span></div><div><span className="icon-badge"><Workflow /></span><span>Connected<br />capabilities</span></div><div><span className="icon-badge"><HardHat /></span><span>Experienced<br />workforce</span></div></div></section>

    <section className="identity-band"><div className="container"><div><span className="eyebrow">Our commitment</span><h2>Progress thrives when<br /><em>experience drives the effort.</em></h2></div><div><p lang="ar" dir="rtl">{arabicName}</p>{!arabic && <span>{company.name}</span>}<a href={profileUrl} download className="text-link">Explore our company profile <ArrowDown size={18} /></a></div></div></section>

    <section className="fresh-capabilities section-pad" id="capabilities"><div className="container"><div className="fresh-section-top"><SectionHeading kicker="What we do" title="The right team for the work." text="From core construction disciplines to specialized industrial support, bring the capabilities your project needs together." /><Link className="fresh-round-link" to="/services" aria-label="Explore all services"><ArrowUpRight /></Link></div><div className="fresh-service-grid">{featured.map((service, i) => <Reveal key={service.slug} delay={i * .08}><ServiceCard service={service} index={i} /></Reveal>)}</div><div className="fresh-service-bottom"><span>01 — 04 <i /></span><span>Core construction services</span><Link to="/services">VIEW ALL SERVICES <ArrowRight size={14} /></Link></div></div></section>

    <section className="fresh-promo"><div className="fresh-promo-art" aria-hidden="true"><span /><span /><span /></div><div className="container fresh-promo-inner"><div><span className="fresh-kicker">ENGINEERING · PROCUREMENT · CONSTRUCTION</span><h2>Do the work right.<br /><em>From the first step.</em></h2></div><div className="fresh-promo-side"><p>A joined-up approach that keeps decisions, materials and site execution moving in the same direction.</p><Link className="fresh-promo-button" to="/epc">Discover our EPC approach <ArrowUpRight size={16} /></Link></div><div className="fresh-promo-index">SSMGC <i /> 02</div></div></section>

    <section className="fresh-story section-pad"><div className="container fresh-story-grid"><Reveal className="fresh-story-image"><img src={image('photo-1486406146926-c627a92ad1ab')} alt="Commercial building representing SSMGC construction work" loading="lazy" /><span>PROJECT DELIVERY, BUILT AROUND YOU</span><i>01</i></Reveal><Reveal className="fresh-story-copy" delay={.12}><span className="eyebrow">A capable partner, at every stage</span><h2>Complex work.<br /><em>Connected thinking.</em></h2><p>{company.description} Our teams bring civil, structural, mechanical, MEP and project support together to meet the needs of each site.</p><ul>{['Clear coordination from planning to handover', 'Safety and quality built into every stage', 'Flexible support for changing project needs'].map((item, i) => <li key={item}><i>0{i + 1}</i>{item}</li>)}</ul><Link className="fresh-button" to="/about">Get to know SSMGC <ArrowUpRight size={16} /></Link></Reveal></div></section>

    <section className="fresh-disciplines"><div className="container"><div className="fresh-discipline-heading"><span className="eyebrow eyebrow-light">Built around your requirements</span><h2>One team.<br /><em>More ways to deliver.</em></h2><Link to="/projects" className="fresh-light-link">Explore capabilities <ArrowRight size={15} /></Link></div><div className="fresh-discipline-grid"><Discipline n="01" title="Civil works" text="Infrastructure, foundations and commercial construction." imageId="photo-1541888946425-d81bb19240f5" /><Discipline n="02" title="Mechanical & piping" text="Integrated mechanical works, equipment and piping." imageId="photo-1581092335878-2d9ff86ca2bf" /><Discipline n="03" title="MEP systems" text="Coordinated electrical, plumbing and building systems." imageId="photo-1581092921461-eab62e97a780" /></div></div></section>

    <section className="fresh-process section-pad"><div className="container"><div className="fresh-section-top"><SectionHeading kicker="One project delivery approach" title="From concept to handover." text="A coordinated process designed to keep work clear, accountable and moving forward." /><Link className="fresh-text-link fresh-process-link" to="/epc">How we deliver <ArrowRight size={16} /></Link></div><div className="fresh-process-grid">{epcStages.map((stage, i) => <Reveal key={stage.title} delay={i * .07}><article><span className="fresh-process-num">0{i + 1}<i /></span><span className="eyebrow">{stage.description}</span><h3>{stage.title}</h3><p>{stage.details[0]}</p><ArrowUpRight className="fresh-process-arrow" size={19} /></article></Reveal>)}</div></div></section>

    <section className="fresh-support"><div className="fresh-support-image"><img src={image('photo-1581092921461-eab62e97a780')} alt="Industrial maintenance and project support" loading="lazy" /></div><div className="fresh-support-copy"><span className="eyebrow">Specialized & support services</span><h2>Keep the work<br /><em>moving forward.</em></h2><p>Practical support for the facility, workforce and supply chain — available when and where your project needs it.</p><div className="fresh-support-list">{services.slice(5, 9).map((service, i) => <Link key={service.slug} to={`/services/${service.slug}`}><span>0{i + 1}</span>{service.title}<ArrowUpRight size={15} /></Link>)}</div><Link className="fresh-text-link" to="/services">Explore all services <ArrowRight size={16} /></Link></div></section>

    <section className="section-pad home-projects"><div className="container"><div className="fresh-section-top"><SectionHeading kicker="Experience in action" title="Work that speaks for itself." text="Explore completed projects and ongoing work from our company portfolio." /><Link to="/projects" className="text-link">All projects <ArrowUpRight size={20} /></Link></div><div className="project-grid">{projects.filter(p => p.status === "Completed").map(project => <Reveal key={project.id}><ProjectCard project={project} /></Reveal>)}</div></div></section>

    <section className="fresh-locations"><div className="container fresh-locations-inner"><div><span className="eyebrow eyebrow-light">Rooted in Saudi Arabia</span><h2>Close to where<br /><em>the work happens.</em></h2><p>Local presence, ready to support your next project.</p></div><div className="fresh-location-cards">{company.locations.map((loc, i) => <article key={loc.name}><span>0{i + 1} / SSMGC LOCATION</span><Building2 /><h3>{loc.name}</h3><p>{loc.address}</p></article>)}</div></div></section>
  </div>);
}
function Discipline({
  n,
  title,
  text,
  imageId
}) {
  const localize = useLocalization();
  const { arabic } = useLocale();
  return localize(<Link className="fresh-discipline-card" to="/projects"><img src={image(imageId)} alt="" loading="lazy" /><span className="fresh-discipline-shade" /><span className="fresh-discipline-count">{n}</span><div><h3>{title}</h3><p>{text}</p><ArrowUpRight size={18} /></div></Link>);
}
