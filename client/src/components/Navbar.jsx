import { useLocalization, useLocale, languagePath } from "../i18n/Locale.jsx";
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from './Brand.jsx';
const links = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['EPC', '/epc'], ['Projects', '/projects'], ['Why SSMGC', '/why-us']];
export default function Navbar() {
  const localize = useLocalization();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const location = useLocation();
  const { arabic } = useLocale();
  useEffect(() => {
    const escape = e => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return localize(<header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-shell"><Brand light={!scrolled} />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, url]) => <NavLink key={url} to={url} end={url === '/'}>{label}</NavLink>)}</nav>
      <Link className="language-switch" data-language-switch to={languagePath(location.pathname, !arabic) + location.search + location.hash} lang={arabic ? 'en' : 'ar'} aria-label={arabic ? 'View English website' : 'عرض الموقع بالعربية'}>{arabic ? 'English' : 'العربية'}</Link>
      <Link className="button button-small nav-cta" to="/contact">Request a quote <ArrowUpRight size={19} /></Link>
      <button ref={toggleRef} className="menu-toggle" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: .24
      }}>{links.map(([label, url], i) => <motion.div key={url} initial={{
          opacity: 0,
          y: 8
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: i * .035
        }}><Link to={url}>{label}<ArrowUpRight size={20} /></Link></motion.div>)}<Link className="button mobile-quote" to="/contact">Request a quote <ArrowUpRight size={20} /></Link></motion.nav>}</AnimatePresence>
  </header>);
}
