import { createContext, useContext, useMemo, isValidElement, cloneElement } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from './ar.js';

const LocaleContext = createContext(null);
export const basePath = pathname => pathname.replace(/^\/ar(?=\/|$)/, '') || '/';
export const languagePath = (path, arabic) => {
  if (!path.startsWith('/') || path.startsWith('//') || path.startsWith('/profile/') || /\.[a-z0-9]+(?:[?#]|$)/i.test(path)) return path;
  const bare = path.replace(/^\/ar(?=\/|[?#]|$)/, '') || '/';
  return arabic ? `/ar${bare === '/' ? '' : bare}` : bare;
};
const normalize = value => value.trim().replace(/\s+/g, ' ').toLowerCase();
const dictionary = new Map(Object.entries(translations).map(([key, value]) => [normalize(key), value]));
export function translate(value) {
  if (typeof value !== 'string' || !value.trim()) return value;
  const text = value.trim();
  let translated = dictionary.get(normalize(text));
  if (!translated && /^View .+ in the company profile$/.test(text)) translated = `عرض ${translate(text.slice(5, -23))} في ملف الشركة`;
  if (!translated && text.endsWith(' project')) translated = `صورة ${translate(text.slice(0, -8))}`;
  if (!translated && text.endsWith(' · SSMGC')) translated = `${translate(text.slice(0, -8))} · SSMGC`;
  if (!translated) return value;
  return `${/^\s/.test(value) ? ' ' : ''}${translated}${/\s$/.test(value) ? ' ' : ''}`;
}

// Translate React content before rendering, including nested text and accessible labels.
// Every page uses the same structure/data in both languages, so sections cannot drift apart.
export function localizeTree(node, arabic) {
  if (!arabic) return node;
  if (typeof node === 'string') return translate(node);
  if (Array.isArray(node)) return node.map((child, index) => {
    const translated = localizeTree(child, arabic);
    // Cloning turns static JSX siblings into an array; keep their identity stable.
    return isValidElement(translated) && translated.key == null
      ? cloneElement(translated, { key: `locale-${index}` })
      : translated;
  });
  if (!isValidElement(node)) return node;
  if (node.props['data-language-switch']) return node;
  const props = {};
  for (const key of ['children', 'title', 'text', 'kicker', 'label', 'placeholder', 'alt', 'aria-label']) {
    if (node.props[key] !== undefined) props[key] = localizeTree(node.props[key], arabic);
  }
  for (const key of ['to', 'href']) if (typeof node.props[key] === 'string') props[key] = languagePath(node.props[key], arabic);
  if (node.type === 'option' && node.props.value === undefined && typeof node.props.children === 'string') props.value = node.props.children;
  // Email addresses and phone numbers keep their natural left-to-right order.
  if (typeof node.props.href === 'string' && /^(mailto:|tel:)/.test(node.props.href)) props.dir = 'ltr';
  if (node.props.type === 'email' || node.props.type === 'tel') props.dir = 'ltr';
  return cloneElement(node, props);
}

export function LocaleProvider({ children }) {
  const location = useLocation();
  const arabic = /^\/ar(?:\/|$)/.test(location.pathname);
  const value = useMemo(() => ({ arabic, t: arabic ? translate : value => value, localize: node => localizeTree(node, arabic) }), [arabic]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
export const useLocale = () => useContext(LocaleContext);
export const useLocalization = () => useLocale().localize;
