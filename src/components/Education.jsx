import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { education } from '../data/portfolio'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true,margin:'-100px'})
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">06. Education</span>
          <h2 className="section-title mt-3">Academic <span className="gradient-text">Background</span></h2>
        </motion.div>
        <div className="space-y-6">
          {education.map((edu,i)=>(
            <motion.div key={edu.id} initial={{opacity:0,x:i%2===0?-30:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:i*0.15}}>
              <Link to={`/education/${edu.id}`} className="glass-card p-8 block group hover:border-accent/20 transition-all">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-display font-bold text-xl text-textPrimary">{edu.degree}</h3>
                        <p className="text-accent font-medium text-sm mt-0.5">{edu.field}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-mono text-textSecondary bg-border px-3 py-1 rounded-full">{edu.period}</span>
                        <span className="text-xs font-mono text-accent3">{edu.score}</span>
                      </div>
                    </div>
                    <p className="text-textSecondary text-sm">{edu.institution}</p>
                    <p className="text-textSecondary/60 text-xs mt-0.5">{edu.location}</p>
                    <span className="inline-flex items-center gap-1 text-xs mt-4 text-accent font-medium">
                      View Details <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.5}}
          className="mt-16 glass-card p-10 text-center" style={{background:'linear-gradient(135deg,rgba(0,217,255,0.05),rgba(124,58,237,0.05))'}}>
          <h3 className="font-display font-bold text-2xl text-textPrimary mb-3">Interested in working together?</h3>
          <p className="text-textSecondary mb-8 max-w-md mx-auto">Download my full resume to learn more about my experience, skills, and achievements.</p>
          <a href="/resume.pdf" download className="btn-primary inline-flex items-center gap-2 text-base px-8">
            <FiDownload size={18} />Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
