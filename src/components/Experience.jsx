import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-100px' })
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background:'radial-gradient(circle,#00D9FF,transparent)' }} />
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0,y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">03. Experience</span>
          <h2 className="section-title mt-3">Work <span className="gradient-text">Timeline</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div key={exp.id} initial={{ opacity:0,x:i%2===0?-40:40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6,delay:i*0.15 }}
                className={`relative flex items-start gap-8 md:gap-0 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                <div className={`flex-1 ml-16 md:ml-0 ${i%2===0?'md:pr-16':'md:pl-16'}`}>
                  <div className="glass-card p-6 group">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-border bg-card flex-shrink-0">
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" onError={e=>{e.target.style.display='none'}} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-textPrimary">{exp.role}</h3>
                          <p className="font-medium text-sm mt-0.5" style={{ color:exp.color }}>{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-textSecondary bg-border px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-textSecondary text-sm leading-relaxed mb-4">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map(tag=>(
                        <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border"
                          style={{ borderColor:`${exp.color}33`,color:exp.color,background:`${exp.color}0D` }}>{tag}</span>
                      ))}
                    </div>
                    <Link to={`/internship/${exp.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:gap-2.5"
                      style={{ color:exp.color }}>
                      View Details <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-bg z-10"
                  style={{ background:exp.color,boxShadow:`0 0 12px ${exp.color}88` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
