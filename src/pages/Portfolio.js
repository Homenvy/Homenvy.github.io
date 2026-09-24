import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import projects from '../projects.json';
import '../portfolio.css';
import PortfolioLandscape from '../components/banner/PortfolioLandscape';
const islands = { cards: 'EnhasaZeal.png', inventory: 'NuuStructureZeal.png', eclipse: 'PalaceZeal.png', motion: 'SunShrineZeal.png', zeal: 'PalaceZeal.png' };
export function ProjectArt({ kind }) {
 return <div className={'project-art art-' + kind} aria-hidden="true"><div className="destination-stars" /><div className="destination-halo" /><img className="destination-island" src={'/img/banner/' + islands[kind]} alt="" /><div className="destination-clouds" /><span>{kind === 'inventory' ? 'SYSTEMS & WORKFLOWS' : kind === 'cards' ? 'COMMUNITY & CONNECTION' : kind === 'eclipse' ? 'WORLDS & ENCOUNTERS' : kind === 'motion' ? 'LIGHT & MOTION' : 'THE HOME OF THE COLLECTION'}</span></div>;
}
export default function Portfolio() {
 useEffect(() => { document.title = 'Selected work · Project Zeal'; window.scrollTo(0, 0); }, []);
 return <main className="portfolio-shell" id="main-content">
 <PortfolioLandscape><div className="portfolio-content"><header className="portfolio-intro"><p className="eyebrow">PROJECT ZEAL / SELECTED WORK</p><h1>The Project <em>Collection</em></h1><p className="portfolio-lead">Worlds to explore. Systems to simplify. Ideas to bring to life.</p><p>Explore the purpose, decisions, and details behind each project.</p></header>
 <div className="project-grid">{projects.map(project => <Link key={project.slug} to={'/portfolio/' + project.slug} className="project-card"><ProjectArt kind={project.kind} /><div className="project-card-copy"><p className="eyebrow">{project.number} / {project.category}</p><h2>{project.title}</h2><p>{project.summary}</p><span className="project-cta">Enter project <span aria-hidden="true">↗</span></span></div></Link>)}</div>
 <section className="portfolio-note"><p className="eyebrow">WORKING WITH AI</p><h2>Clear direction. Hands-on validation.</h2><p>I use AI across research, implementation, and creative production. I define the intended result, communicate constraints, test what comes back, and give specific feedback for the next pass. When an approach works, I turn it into a repeatable workflow.</p><p>My role spans concept development, creative direction, technical decisions, and practical testing. AI expands the range of work I can explore; checking the result remains part of the job.</p></section><aside className="portfolio-note"><h2>An evolving collection.</h2><p>From everyday workflows to expressive interfaces, each project is a place to learn, test, and improve.</p></aside></div></PortfolioLandscape></main>;
}
