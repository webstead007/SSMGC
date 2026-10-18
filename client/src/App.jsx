import { useLocalization, useLocale, basePath } from "./i18n/Locale.jsx";
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CTASection from './components/CTASection.jsx';
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const EPC = lazy(() => import('./pages/EPC.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const WhyUs = lazy(() => import('./pages/WhyUs.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const metadata = {
  '/': ['SSMGC | Construction, Engineering & Industrial Services Saudi Arabia', 'SSMGC delivers civil construction, structural works, MEP, EPC contracting, industrial maintenance and support services across Saudi Arabia.'],
  '/about': ['About SSMGC | Construction & Industrial Services', 'Learn about SSMGC, its values and construction, engineering and industrial service capabilities across Saudi Arabia.'],
  '/services': ['Services | SSMGC Saudi Arabia', 'Explore construction, specialized industrial, procurement, manpower, equipment and accommodation services.'],
  '/epc': ['EPC Contracting | SSMGC', 'Integrated engineering, procurement and construction support from concept to commissioning.'],
  '/projects': ['Completed & Ongoing Projects | SSMGC', 'Explore SSMGC project references: gas pipelines, FRP tanks, NWC infrastructure, tank cleaning and cement factory walkways.'],
  '/why-us': ['Why SSMGC | Quality, Safety & Commitment', 'Experienced workforce, a strong safety culture, reliable execution and customer-focused project support.'],
  '/contact': ['Contact SSMGC | Saudi Arabia', 'Contact SSMGC for construction, EPC, industrial maintenance and project support in Saudi Arabia.'],
  '/ar': ['SSMGC | شركة سها سعيد مرزوق الحربي للمقاولات العامة', 'الإنشاءات والهندسة والخدمات الصناعية في المملكة العربية السعودية.']
};
export default function App() {
  const localize = useLocalization();
  const location = useLocation();
  const { arabic, t } = useLocale();
  const routePath = basePath(location.pathname);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    const [title, description] = metadata[routePath] || ['SSMGC | Construction & Industrial Services', 'Integrated construction and industrial services across Saudi Arabia.'];
    document.title = t(title);
    document.documentElement.lang = arabic ? 'ar' : 'en';
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t(description);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `https://ssmgcgroup.com${location.pathname}`;
  }, [location.pathname, arabic, routePath, t]);
  return localize(<><a className="skip-link" href="#main-content">Skip to content</a><div className="scroll-progress" aria-hidden="true"><motion.span key={location.pathname} initial={{
        scaleX: 0
      }} animate={{
        scaleX: 1
      }} transition={{
        duration: .35
      }} style={{
        transformOrigin: '0 50%'
      }} /></div><Navbar /><main id="main-content"><Suspense fallback={<div className="page-loading"><span className="loader-mark"><i /><i /><i /></span><span>SSMGC</span><i className="loader-line" /></div>}><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: .2
          }}><Routes location={{ ...location, pathname: routePath }}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/services/:slug" element={<ServiceDetail />} /><Route path="/epc" element={<EPC />} /><Route path="/projects" element={<Projects />} /><Route path="/why-us" element={<WhyUs />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></motion.div></AnimatePresence></Suspense><CTASection /></main><Footer /><a className="back-to-top" href="#top" onClick={e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }} aria-label="Back to top"><ArrowUp size={21} /></a></>);
}
function NotFound() {
  const localize = useLocalization();
  return localize(<section className="not-found"><span className="eyebrow">Page not found</span><h1>Let’s get you<br />back on track.</h1><Link className="button" to="/">Return home</Link></section>);
}
