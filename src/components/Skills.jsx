import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

const categories = ['All', 'BI & Visualization', 'Programming', 'Database', 'AI/ML', 'Soft Skills']

function SkillBar({ skill, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-5"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-display font-semibold text-textPrimary text-sm">{skill.name}</span>
        <span className="text-accent font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00D9FF, #7C3AED)' }}
        />
      </div>
      <div className="mt-2">
        <span className="text-xs text-textSecondary font-mono">{skill.category}</span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Bg accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">02. Skills</span>
          <h2 className="section-title mt-3">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-textSecondary mt-4 max-w-xl mx-auto">
            Tools and technologies I use to transform data into actionable insights
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.06} />
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter', 'VS Code', 'Git', 'Power Query'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-xs font-mono text-textSecondary border border-border rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
