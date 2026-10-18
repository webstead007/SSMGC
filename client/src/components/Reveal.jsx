import { useLocalization } from "../i18n/Locale.jsx";
import { motion, useReducedMotion } from 'framer-motion';
export default function Reveal({
  children,
  className = '',
  delay = 0,
  ...props
}) {
  const localize = useLocalization();
  const reduce = useReducedMotion();
  return localize(<motion.div className={className} initial={reduce ? false : {
    opacity: 0,
    y: 22
  }} whileInView={reduce ? undefined : {
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: .14
  }} transition={{
    duration: .65,
    delay,
    ease: [.22, .7, .2, 1]
  }} {...props}>{children}</motion.div>);
}
