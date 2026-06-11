import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiArrowDown } from 'react-icons/fi'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { personalInfo } from '../data/portfolio'

const roles = ['Data Analyst', 'Power BI Developer', 'SQL Developer', 'Python Developer', 'Business Development Executive']
const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }

export default function Hero() {
  const typedText = useTypingEffect(roles, 90, 2200)
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle,#00D9FF,transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle,#7C3AED,transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono text-accent border border-accent/20 bg-accent/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />Available for opportunities
            </motion.div>
            <motion.h1 variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.35 }} className="section-title text-textPrimary mb-4">
              Hi, I'm <span className="gradient-text glow-text">Gokul VM</span>
            </motion.h1>
            <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-display font-semibold text-textSecondary mb-6 min-h-[2.5rem]">
              <span className="text-accent typing-cursor">{typedText}</span>
            </motion.div>
            <motion.p variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.65 }}
              className="text-textSecondary text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Aspiring Data Analyst passionate about turning raw data into meaningful insights. Skilled in{' '}
              <span className="text-accent font-medium">Power BI</span>,{' '}
              <span className="text-accent font-medium">Python</span>, and{' '}
              <span className="text-accent font-medium">SQL</span> to drive data-driven decisions.
            </motion.p>
            <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="/resume.pdf" download className="btn-primary flex items-center gap-2"><FiDownload size={16} />Download Resume</a>
              <a href="#contact" className="btn-outline flex items-center gap-2"><FiMail size={16} />Get In Touch</a>
            </motion.div>
            <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.95 }}
              className="flex items-center gap-4 justify-center lg:justify-start">
              {[{icon:FiGithub,href:personalInfo.github,label:'GitHub'},{icon:FiLinkedin,href:personalInfo.linkedin,label:'LinkedIn'},{icon:FiMail,href:`mailto:${personalInfo.email}`,label:'Email'},{icon:FiPhone,href:`tel:${personalInfo.phone}`,label:'Phone'}].map(({icon:Icon,href,label})=>(
                <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-textSecondary hover:text-accent border border-border hover:border-accent/40 hover:bg-accent/5 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity:0,scale:0.8 }} animate={{ opacity:1,scale:1 }} transition={{ duration:0.8,delay:0.4,type:'spring',stiffness:100 }}
            className="flex-shrink-0 flex items-center justify-center">
            <div className="relative float-anim">
              <div className="absolute -inset-4 rounded-full opacity-30 blur-xl" style={{ background:'linear-gradient(135deg,#00D9FF,#7C3AED)' }} />
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <motion.div animate={{ rotate:360 }} transition={{ duration:12,repeat:Infinity,ease:'linear' }}
                  className="absolute -inset-1 rounded-full glow-ring"
                  style={{ background:'conic-gradient(from 0deg,#00D9FF,#7C3AED,#F59E0B,#00D9FF)',padding:'3px',borderRadius:'50%' }} />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-bg z-10"
                  style={{ boxShadow:'0 0 60px rgba(0,217,255,0.15),0 0 120px rgba(124,58,237,0.1)' }}>
                  <img src="/profile.jpg" alt="Gokul VM" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,transparent 60%,rgba(8,11,20,0.4) 100%)' }} />
                </div>
              </div>
              <motion.div initial={{ opacity:0,x:-20 }} animate={{ opacity:1,x:0 }} transition={{ delay:1.2 }} className="absolute -left-8 top-12 glass-card px-3 py-2 text-xs font-mono text-accent">📊 Power BI</motion.div>
              <motion.div initial={{ opacity:0,x:20 }} animate={{ opacity:1,x:0 }} transition={{ delay:1.4 }} className="absolute -right-8 top-20 glass-card px-3 py-2 text-xs font-mono text-accent2">🐍 Python</motion.div>
              <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:1.6 }} className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-3 py-2 text-xs font-mono text-accent3">🗄️ SQL</motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-textSecondary">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5,repeat:Infinity }}><FiArrowDown size={16} /></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
