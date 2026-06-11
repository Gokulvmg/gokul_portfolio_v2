import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { leadership } from '../data/portfolio'

export default function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true,margin:'-100px'})
  return (
    <section id="leadership" className="relative py-28 px-6">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none" style={{background:'radial-gradient(circle,#00D9FF,transparent)'}} />
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">05. Leadership</span>
          <h2 className="section-title mt-3">Roles &amp; <span className="gradient-text">Responsibilities</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leadership.map((item,i)=>(
            <motion.div key={item.id} initial={{opacity:0,scale:0.95}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:0.5,delay:i*0.1}}>
              <Link to={`/leadership/${item.id}`} className="glass-card p-6 flex items-start gap-5 group block hover:border-opacity-40 transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{background:`${item.color}15`,border:`1px solid ${item.color}30`}}>{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-textPrimary" style={{color:item.color}}>{item.role}</h3>
                  <p className="text-textSecondary text-sm mt-1 leading-relaxed">{item.org}</p>
                  <span className="inline-flex items-center gap-1 text-xs mt-3 font-medium transition-all" style={{color:item.color}}>
                    View Details <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
