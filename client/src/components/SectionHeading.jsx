import Reveal from './Reveal.jsx';
import { useLocalization } from "../i18n/Locale.jsx";
export default function SectionHeading({
  kicker,
  title,
  text,
  light = false,
  centered = false
}) {
  const localize = useLocalization();
  return localize(<Reveal className={`section-heading ${light ? 'heading-light' : ''} ${centered ? 'heading-center' : ''}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>);
}
