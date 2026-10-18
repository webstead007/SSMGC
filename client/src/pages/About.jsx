import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowRight, BadgeCheck, HardHat, ShieldCheck, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { company } from '../data/company.js';
const values = [{
  title: 'Quality',
  icon: BadgeCheck
}, {
  title: 'Safety',
  icon: ShieldCheck
}, {
  title: 'Commitment',
  icon: Star
}, {
  title: 'Professionalism',
  icon: HardHat
}, {
  title: 'Customer satisfaction',
  icon: Users
}];
export default function About() {
  const localize = useLocalization();
  return localize(<><PageHero kicker="About SSMGC" title={<>Experience drives<br />the effort.</>} text={company.description} image="photo-1486406146926-c627a92ad1ab" />
    <section className="section-pad about-intro"><div className="container about-intro-grid"><Reveal><span className="eyebrow">Who we are</span><h2>Committed to doing the work <span>the right way.</span></h2></Reveal><Reveal delay={.1}><p>SSMGC is a construction company specializing in civil, structural and MEP works, alongside mechanical, industrial and project support services across Saudi Arabia.</p><p>Our focus is on quality, safety, efficiency and timely execution. We work to bring the right disciplines together around the needs of each project.</p><Link to="/services" className="text-link">Explore our capabilities <ArrowRight size={16} /></Link></Reveal></div></section>
    <section className="values-section section-pad"><div className="container"><SectionHeading kicker="What guides us" title="Principles in practice." text="Our values shape how we plan, communicate and deliver." /><div className="values-grid">{values.map(({
            title,
            icon: Icon
          }, i) => <Reveal key={title} delay={i * .07}><article className="value-card"><span className="value-icon"><Icon size={22} /></span><span className="eyebrow">0{i + 1}</span><h3>{title}</h3></article></Reveal>)}</div></div></section>
    <section className="about-story"><div className="about-story-image" /><div className="about-story-copy"><span className="eyebrow eyebrow-light">Our commitment</span><h2>Building today.<br /><em>Supporting tomorrow.</em></h2><p>Quality stands strong when commitment leads the way. Every project is an opportunity to bring experience, skilled people and dependable support to work that matters.</p><Link to="/contact" className="text-link text-link-light">Work with SSMGC <ArrowRight size={16} /></Link></div></section>
    <section className="section-pad about-capabilities"><div className="container about-cap-layout"><div><span className="eyebrow">Our reach</span><h2>Serving project needs across <span>Saudi Arabia.</span></h2><p>Our profile lists the head office in Buraydah, Al-Qassim Region, and a presence in Yanbu Al Bahr.</p></div><div className="about-cap-cards">{company.locations.map((loc, i) => <article key={loc.name}><span>0{i + 1}</span><h3>{loc.name}</h3><p>{loc.address}</p></article>)}</div></div></section>
  </>);
}
