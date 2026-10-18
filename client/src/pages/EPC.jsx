import { useLocalization } from "../i18n/Locale.jsx";
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import DeliveryStages from '../components/DeliveryStages.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { epcStages } from '../data/services.js';
export default function EPC() {
  const localize = useLocalization();
  return localize(<><PageHero kicker="Integrated project delivery" title={<>EPC contracting,<br />experience & capability.</>} text="SSMGC provides integrated Engineering, Procurement and Construction support for industrial projects through a coordinated project delivery approach." image="photo-1581092160562-40aa08e78837" />
    <section className="section-pad epc-page-intro"><div className="container epc-page-intro-grid"><Reveal><span className="eyebrow">From concept to commissioning</span><h2>One coordinated approach <span>to project delivery.</span></h2></Reveal><Reveal delay={.1}><p>SSMGC coordinates multidisciplinary engineering, material sourcing, site execution, testing and commissioning support through a single project delivery approach.</p><p>Our EPC capability can bring civil, structural, mechanical, electrical and MEP works together with procurement and project handover support.</p></Reveal></div></section>
    <section className="epc-process section-pad"><div className="container"><SectionHeading kicker="The delivery sequence" title="Four stages. One connected effort." text="Each stage is planned to connect with the next, helping teams carry decisions and quality through the full project lifecycle." /><DeliveryStages detailed /></div></section>
    <section className="epc-banner"><div className="container epc-banner-inner"><div><span className="eyebrow eyebrow-light">Delivery with purpose</span><h2>From design basis<br />to project handover.</h2><p>Connected engineering, procurement and site execution — guided by quality, safety and coordination.</p></div><div className="epc-ring"><span>E</span><i /><span>P</span><i /><span>C</span></div></div></section>
  </>);
}
