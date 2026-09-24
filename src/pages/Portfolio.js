import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import projects from '../projects.json';
import '../portfolio.css';
import PortfolioLandscape from '../components/banner/PortfolioLandscape';
const media = {
 cards: {file:'tcg', label:'Vegas TCG Exchange · event website'},
 inventory: {file:'ims', label:'Inventory dashboard · sample data'},
 eclipse: {file:'chorrona', label:'Chorrona · front idle animation', animated:true},
 motion: {file:'gatoru', label:'Gatoru · floating character', animated:true},
 zeal: {file:'zeal', label:'Project Zeal · home page'}
};
export function ProjectArt({ kind }) {
 const item = media[kind];
 const video = useRef(null);
 useEffect(() => {
  if (!video.current) return;
  const el = video.current;
  let visible = false;
  const sync = () => {
   if (visible && !document.hidden && document.body.dataset.sceneryMotion === 'on') el.play().catch(() => {});
   else el.pause();
  };
  const observer = new IntersectionObserver(entries => {visible = entries[0].isIntersecting; sync();});
  observer.observe(el);
  const motion = new MutationObserver(sync);
  motion.observe(document.body, {attributes:true,attributeFilter:['data-scenery-motion']});
  document.addEventListener('visibilitychange',sync);
  return () => {observer.disconnect();motion.disconnect();document.removeEventListener('visibilitychange',sync);el.pause();};
 }, [kind]);
 return <div className={'project-art project-media art-' + kind}>
  {item.animated ? <video ref={video} muted loop playsInline preload="none" poster={'/media/projects/'+item.file+'.webp'} aria-label={item.label}>
   <source src={'/media/projects/'+item.file+'.mp4'} type="video/mp4" />
  </video> : <img src={'/media/projects/'+item.file+'.webp'} alt={item.label} loading="lazy" />}
  <span>{item.label}</span>
 </div>;
}
export default function Portfolio() {
 useEffect(() => { document.title = 'Selected work · Project Zeal'; window.scrollTo(0, 0); }, []);
 return <main className="portfolio-shell" id="main-content">
 <PortfolioLandscape><div className="portfolio-content"><header className="portfolio-intro"><p className="eyebrow">PROJECT ZEAL / SELECTED WORK</p><h1>The Project <em>Collection</em></h1><p className="portfolio-lead">Worlds to explore. Systems to simplify. Ideas to bring to life.</p><p>Explore the purpose, decisions, and details behind each project.</p></header>
 <div className="project-grid">{projects.map(project => <Link key={project.slug} to={'/portfolio/' + project.slug} className="project-card"><ProjectArt kind={project.kind} /><div className="project-card-copy"><p className="eyebrow">{project.number} / {project.category}</p><h2>{project.title}</h2><p>{project.summary}</p><span className="project-cta">Enter project <span aria-hidden="true">↗</span></span></div></Link>)}</div>
 <section className="portfolio-note"><p className="eyebrow">WORKING WITH AI</p><h2>Clear direction. Hands-on validation.</h2><p>I use AI across research, implementation, and creative production. I define the intended result, communicate constraints, test what comes back, and give specific feedback for the next pass. When an approach works, I turn it into a repeatable workflow.</p><p>My role spans concept development, creative direction, technical decisions, and practical testing. AI expands the range of work I can explore; checking the result remains part of the job.</p></section><aside className="portfolio-note"><h2>An evolving collection.</h2><p>From everyday workflows to expressive interfaces, each project is a place to learn, test, and improve.</p></aside></div></PortfolioLandscape></main>;
}
