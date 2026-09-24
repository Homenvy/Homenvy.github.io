import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../projects.json';
import { ProjectArt } from './Portfolio';
import PortfolioLandscape from '../components/banner/PortfolioLandscape';
export default function ProjectDetail() {
 const { slug } = useParams();
 const project = projects.find(item => item.slug === slug);
 const heading = useRef(null);
 useEffect(() => { document.title = (project ? project.title : 'Project not found') + ' · Project Zeal'; window.scrollTo(0, 0); heading.current?.focus({ preventScroll: true }); }, [project]);
 if (!project) return <main className="portfolio-shell project-detail"><PortfolioLandscape><div className="portfolio-content"><h1 ref={heading} tabIndex={-1}>Project not found</h1><Link className="project-cta" to="/portfolio">Back to selected work</Link></div></PortfolioLandscape></main>;
 const next = projects[(projects.indexOf(project) + 1) % projects.length];
 return <main className="portfolio-shell project-detail" id="main-content"><PortfolioLandscape><div className="portfolio-content"><Link className="back-link" to="/portfolio">← Selected work</Link>
 <header className="detail-intro"><p className="eyebrow">{project.number} / {project.category}</p><h1 ref={heading} tabIndex={-1}>{project.title}</h1><p className="portfolio-lead">{project.summary}</p><ul className="project-tags" aria-label="Technologies">{project.stack.map(tag => <li key={tag}>{tag}</li>)}</ul></header>
 <ProjectArt kind={project.kind} />
 <div className="detail-columns"><section><p className="eyebrow">THE PROJECT</p><h2>What it does</h2><p>{project.description}</p>{project.source && <a className="project-cta" href={project.source} target="_blank" rel="noreferrer">View repository ↗</a>}</section><section><p className="eyebrow">THE APPROACH</p><h2>Purposeful decisions</h2><p>{project.challenge}</p><p>{project.approach}</p></section></div>
 <section><p className="eyebrow">A CLOSER LOOK</p><h2>Explore the details</h2>{project.features.map(([title, body]) => <details key={slug + title} className="project-disclosure"><summary>{title}<span aria-hidden="true">+</span></summary><p>{body}</p></details>)}</section>
 <section className="portfolio-note"><h2>The next pass</h2><p>{project.next}</p></section>
 <Link className="next-project" to={'/portfolio/' + next.slug}><span className="eyebrow">NEXT PROJECT</span><strong>{next.title} <span aria-hidden="true">→</span></strong></Link></div></PortfolioLandscape></main>;
}
