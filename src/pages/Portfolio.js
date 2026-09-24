import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import projects from '../projects.json';
import '../portfolio.css';
export function ProjectArt({ kind }) {
 return <div className={'project-art art-' + kind} aria-hidden="true"><div className="art-grid" /><div className="art-object one" /><div className="art-object two" /><div className="art-object three" /><span>{kind === 'inventory' ? 'SYSTEMS IN MOTION' : kind === 'cards' ? 'A PLACE AT THE TABLE' : 'IDEAS INTO EXPERIENCES'}</span></div>;
}
export default function Portfolio() {
 useEffect(() => { document.title = 'Selected work · Project Zeal'; window.scrollTo(0, 0); }, []);
 return <main className="portfolio-shell" id="main-content">
 <header className="portfolio-intro"><p className="eyebrow">PROJECT ZEAL / SELECTED WORK</p><h1>Concept.<br />Build. <em>Refine.</em></h1><p className="portfolio-lead">Interactive experiences and practical systems, built one thoughtful pass at a time.</p><p>Explore the purpose, decisions, and details behind each project.</p></header>
 <div className="project-grid">{projects.map(project => <Link key={project.slug} to={'/portfolio/' + project.slug} className="project-card"><ProjectArt kind={project.kind} /><div className="project-card-copy"><p className="eyebrow">{project.number} / {project.category}</p><h2>{project.title}</h2><p>{project.summary}</p><span className="project-cta">Explore project <span aria-hidden="true">↗</span></span></div></Link>)}</div>
 <section className="portfolio-note"><p className="eyebrow">WORKING WITH AI</p><h2>Clear direction. Hands-on validation.</h2><p>I use AI across research, implementation, and creative production. I define the intended result, communicate constraints, test what comes back, and give specific feedback for the next pass. When an approach works, I turn it into a repeatable workflow.</p><p>My role spans concept development, creative direction, technical decisions, and practical testing. AI expands the range of work I can explore; checking the result remains part of the job.</p></section><aside className="portfolio-note"><h2>An evolving collection.</h2><p>From everyday workflows to expressive interfaces, each project is a place to learn, test, and improve.</p></aside></main>;
}
