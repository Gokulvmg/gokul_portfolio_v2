import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo, stats } from '../data/portfolio'

function StatCard({ value, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 text-center"
    >
      <div className="text-3xl font-display font-black gradient-text mb-1">
        {value}
      </div>
      <div className="text-sm text-textSecondary font-body">{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">01. About</span>
          <h2 className="section-title mt-3">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Image */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div
                  className="absolute -inset-2 rounded-2xl opacity-20"
                  style={{ background: 'linear-gradient(135deg, #00D9FF, #7C3AED)', filter: 'blur(20px)' }}
                />
                <div className="relative glass-card overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="/profile.jpg"
                    alt="Gokul VM"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(8,11,20,0.8) 100%)' }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-display font-bold text-xl text-textPrimary">Gokul VM</p>
                    <p className="text-accent text-sm font-mono">Aspiring Data Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-textSecondary text-lg leading-relaxed">
              {personalInfo.about}
            </p>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FiMapPin, value: personalInfo.location },
                { icon: FiMail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: FiPhone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: FiGithub, value: 'Gokulvmg', href: personalInfo.github },
              ].map(({ icon: Icon, value, href }) => (
                <div key={value} className="flex items-center gap-3 text-textSecondary">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent/10 border border-accent/20 flex-shrink-0">
                    <Icon size={14} className="text-accent" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm hover:text-accent transition-colors truncate">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm truncate">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-sm py-2.5 px-5">
                <FiGithub size={15} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-sm py-2.5 px-5">
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={`${stat.value}${stat.suffix}`}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
