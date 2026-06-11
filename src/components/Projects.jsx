import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true,margin:'-60px'})
  return (
    <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:index*0.1}}
      className="glass-card overflow-hidden group flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={project.cover} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={e=>{e.target.parentElement.style.background=`${project.color}15`}} />
        <div className="absolute inset-0" style={{background:`linear-gradient(180deg,transparent 30%,rgba(8,11,20,0.85) 100%)`}} />
        <div className="absolute top-3 right-3 flex gap-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-bg/80 text-textSecondary hover:text-accent border border-border/50 transition-all" aria-label="GitHub">
            <FiGithub size={14} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-bg/80 text-textSecondary hover:text-accent border border-border/50 transition-all" aria-label="Demo">
            <FiExternalLink size={14} />
          </a>
        </div>
        <div className="absolute bottom-3 left-4">
          <span className="text-2xl">{project.icon}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-textPrimary">{project.title}</h3>
        <p className="font-mono text-xs mt-0.5 mb-3" style={{color:project.color}}>{project.subtitle}</p>
        <p className="text-textSecondary text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map(t=>(
            <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md"
              style={{background:`${project.color}10`,color:project.color,border:`1px solid ${project.color}25`}}>{t}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center py-2 text-xs font-medium rounded-lg border transition-all"
            style={{borderColor:`${project.color}40`,color:project.color,background:`${project.color}08`}}>
            Live Demo
          </a>
          <Link to={`/project/${project.id}`}
            className="flex-1 text-center py-2 text-xs font-medium rounded-lg flex items-center justify-center gap-1 transition-all"
            style={{borderColor:`${project.color}40`,color:project.color,background:`${project.color}08`,border:`1px solid ${project.color}40`}}>
            View Details <FiArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true,margin:'-100px'})
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none" style={{background:'radial-gradient(circle,#F59E0B,transparent)'}} />
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">04. Projects</span>
          <h2 className="section-title mt-3">Featured <span className="gradient-text">Work</span></h2>
          <p className="text-textSecondary mt-4 max-w-xl mx-auto">Data-driven projects spanning dashboards, analytics, and business intelligence</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i} />)}
        </div>
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.6}} className="text-center mt-12">
          <a href="https://github.com/Gokulvmg" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"><FiGithub size={16}/>View All on GitHub</a>
        </motion.div>
      </div>
    </section>
  )
}
