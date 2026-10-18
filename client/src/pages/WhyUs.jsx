import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck, Users, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { company } from '../data/company.js';
const icons = [Users, ShieldCheck, Workflow, BadgeCheck, HeartHandshake];
export default function WhyUs() {
  const localize = useLocalization();
  return localize(<><PageHero kicker="Why SSMGC" title={<>Quality stands strong<br />when commitment leads.</>} text="An experienced workforce, strong safety culture and a customer-focused approach — supporting reliable project execution." image="photo-1504307651254-35680f356dfd" />
    <section className="section-pad why-detail"><div className="container"><SectionHeading kicker="The SSMGC approach" title="Strong fundamentals. Dependable delivery." text="Our profile highlights the capabilities and commitments that guide our work with customers." /><div className="strength-grid">{company.strengths.map((item, i) => {
            const Icon = icons[i];
            return <Reveal key={item} delay={i * .06}><article><span className="strength-icon"><Icon size={22} /></span><span className="eyebrow">0{i + 1}</span><h3>{item}</h3><p>{['Skilled people bring experience and practical knowledge to project teams.', 'A strong safety culture informs how work is planned and carried out.', 'Construction, industrial and support capabilities can be coordinated around project needs.', 'Reliable execution and responsive support help work move forward.', 'A customer-focused approach keeps collaboration and requirements in view.'][i]}</p></article></Reveal>;
          })}</div></div></section>
    <section className="why-statement"><div className="container why-statement-inner"><span className="eyebrow eyebrow-light">Our promise</span><h2>Progress thrives when<br /><em>experience drives the effort.</em></h2><p>We bring quality, safety, efficiency and commitment to every project we support.</p><Link to="/contact" className="text-link text-link-light">Start a conversation <ArrowRight size={16} /></Link></div></section>
  </>);
}
