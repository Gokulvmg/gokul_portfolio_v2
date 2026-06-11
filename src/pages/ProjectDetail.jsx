import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)
  const [activeImg, setActiveImg] = useState(0)

  if (!project) return <div className="min-h-screen flex items-center justify-center text-textSecondary pt-24">Project not found. <Link to="/" className="text-accent ml-2">Go Home</Link></div>

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button onClick={()=>navigate(-1)} className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors mb-8 font-medium">
          <FiArrowLeft size={18}/> Back
        </button>

        {/* Header */}
        <div className="glass-card p-8 mb-8" style={{borderColor:`${project.color}30`}}>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{project.icon}</span>
                <div>
                  <h1 className="font-display font-black text-3xl text-textPrimary">{project.title}</h1>
                  <p className="font-mono text-sm mt-1" style={{color:project.color}}>{project.subtitle}</p>
                </div>
              </div>
              <p className="text-textSecondary leading-relaxed max-w-2xl">{project.longDesc}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm py-2.5 px-5">
                <FiExternalLink size={15}/> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-sm py-2.5 px-5">
                <FiGithub size={15}/> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        {project.images && project.images.length > 0 && (
          <div className="glass-card p-6 mb-8">
            <h2 className="font-display font-bold text-xl text-textPrimary mb-5">📸 Dashboard Screenshots</h2>
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-video bg-card">
              <img src={project.images[activeImg]} alt="screenshot" className="w-full h-full object-contain" />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {project.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImg===i?'border-accent':'border-border hover:border-accent/40'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Problem & Objectives */}
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">🎯 Problem Statement</h2>
            <p className="text-textSecondary text-sm leading-relaxed mb-5">{project.problem}</p>
            <h3 className="font-display font-semibold text-textPrimary mb-3">Objectives</h3>
            <ul className="space-y-2">
              {project.objectives.map((o,i)=>(
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span className="text-accent mt-0.5">▸</span>{o}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Dataset */}
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">🛠 Tools Used</h2>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map(t=>(
                <span key={t} className="px-3 py-1.5 text-sm font-mono rounded-lg"
                  style={{background:`${project.color}12`,color:project.color,border:`1px solid ${project.color}30`}}>{t}</span>
              ))}
            </div>
            <h3 className="font-display font-semibold text-textPrimary mb-2">Dataset</h3>
            <p className="text-textSecondary text-sm leading-relaxed">{project.dataset}</p>
          </div>
        </div>

        {/* Features & Outcomes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">✨ Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((f,i)=>(
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span style={{color:project.color}}>●</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">📈 Outcomes</h2>
            <ul className="space-y-3">
              {project.outcomes.map((o,i)=>(
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span className="text-accent3">✓</span>{o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-base px-10">
            <FiExternalLink size={18}/> View Live Demo
          </a>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
