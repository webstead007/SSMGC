import { useLocalization } from "../i18n/Locale.jsx";
import { useState } from 'react';
import { Download, MapPin, ArrowUpRight, CheckCircle2, Clock3 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';
import { profileUrl } from '../data/brochure.js';
export function ProjectCard({
  project,
  compact = false
}) {
  const localize = useLocalization();
  const StatusIcon = project.status === 'Completed' ? CheckCircle2 : Clock3;
  return localize(<article className="project-card"><a className="project-photo" href={`${profileUrl}#page=${project.page}`} target="_blank" rel="noreferrer" aria-label={`View ${project.title} in the company profile`}><img src={`/profile/${project.image}.webp`} alt={project.title} loading="lazy" /><span className={`project-status ${project.status.toLowerCase()}`}><StatusIcon size={16} />{project.status}</span><span className="project-photo-action"><ArrowUpRight /></span></a><div className="project-copy"><span className="project-location"><MapPin size={16} />{project.location}</span><h3>{project.title}</h3><p>{project.summary}</p>{!compact && <><dl>{project.client && <><dt>Client</dt><dd>{project.client}</dd></>}{project.contractor && <><dt>Main contractor</dt><dd>{project.contractor}</dd><dt>Subcontractor</dt><dd>SSMGC</dd></>}</dl>{project.scope.length > 0 && <details><summary>Project scope & expertise</summary><ul>{project.scope.map(item => <li key={item}>{item}</li>)}</ul>{project.skills && <p>{project.skills}</p>}</details>}{project.note && <p className="project-source-note">{project.note}</p>}<a className="text-link" href={`${profileUrl}#page=${project.page}`} target="_blank" rel="noreferrer">View project reference <ArrowUpRight size={17} /></a></>}</div></article>);
}
export default function Projects() {
  const localize = useLocalization();
  const [filter, setFilter] = useState('All projects');
  const filtered = projects.filter(p => filter === 'All projects' || p.status === filter);
  return localize(<><PageHero kicker="Our project portfolio" title={<>Experience you<br />can see.</>} text="Completed work and ongoing projects across industrial facilities, infrastructure and maintenance, documented in our company profile." image="photo-1504307651254-35680f356dfd"><a className="button" href={profileUrl} download>Company profile <Download size={19} /></a></PageHero><section className="section-pad project-section"><div className="container"><div className="project-toolbar"><div><span className="eyebrow">From our company profile</span><h2>Completed & ongoing projects</h2></div><div className="project-filters" role="group" aria-label="Filter projects">{['All projects', 'Completed', 'Ongoing'].map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div></div><p className="project-count" aria-live="polite">{filtered.length} project references · Status as recorded in the company profile</p><div className="project-grid">{filtered.map(project => <Reveal key={project.id}><ProjectCard project={project} /></Reveal>)}</div></div></section><section className="section-pad portfolio-gallery"><div className="container"><span className="eyebrow">On site in Yanbu</span><h2>More from the field.</h2><p>Civil, structural and industrial work photographed in our project portfolio.</p><a href={`${profileUrl}#page=18`} target="_blank" rel="noreferrer"><img src="/profile/project-gallery.webp" alt="Six site photographs showing reinforcing steel, concrete works, industrial pipelines and equipment in Yanbu" loading="lazy" /></a><a className="text-link" href={profileUrl} download>Download the complete company profile <Download size={18} /></a></div></section></>);
}
