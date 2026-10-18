import { Compass, PackageCheck, HardHat, ClipboardCheck, ArrowUpRight, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { epcStages } from '../data/services.js';
import { useLocalization } from '../i18n/Locale.jsx';
import Reveal from './Reveal.jsx';

const icons = [Compass, PackageCheck, HardHat, ClipboardCheck];
export default function DeliveryStages({ detailed = false }) {
  const localize = useLocalization();
  const { hash } = useLocation();
  useEffect(() => {
    if (!detailed || !/^#stage-[1-4]$/.test(hash)) return;
    const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'center' }));
    return () => cancelAnimationFrame(frame);
  }, [detailed, hash]);
  return localize(<div className={`delivery-grid ${detailed ? 'delivery-detailed' : ''}`}>
    {epcStages.map((stage, index) => {
      const Icon = icons[index];
      return <Reveal key={stage.title} delay={index * .08}>
        <article className="delivery-card" id={detailed ? `stage-${index + 1}` : undefined}>
          <div className="delivery-card-top"><span className="delivery-icon"><Icon size={28} strokeWidth={1.6} /></span><span className="delivery-step">{String(index + 1).padStart(2, '0')}</span></div>
          <span className="eyebrow">{stage.description}</span><h3>{stage.title}</h3>
          {detailed ? <ul>{stage.details.map(detail => <li key={detail}><Check size={18} /><span>{detail}</span></li>)}</ul> : <><p>{stage.details[0]}</p><Link className="delivery-link" to={`/epc#stage-${index + 1}`}>Explore this stage <ArrowUpRight size={20} /></Link></>}
        </article>
      </Reveal>;
    })}
  </div>);
}
