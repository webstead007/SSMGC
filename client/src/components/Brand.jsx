import { useLocalization } from "../i18n/Locale.jsx";
import { Link } from 'react-router-dom';
export default function Brand({
  light = false
}) {
  const localize = useLocalization();
  return localize(<Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="SSMGC home"><img src={light ? '/ssmgc-logo-white.png' : '/ssmgc-logo.png'} alt="SSMGC — Suha Saeed Marzouq Al-Harbi General Contracting Company" /></Link>);
}
