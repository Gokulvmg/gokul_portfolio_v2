import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { education } from '../data/portfolio'
import Footer from '../components/Footer'

export default function EducationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const edu = education.find(e => e.id === id)

  if (!edu) return <div className="min-h-screen flex items-center justify-center pt-24 text-textSecondary">Not found</div>

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button onClick={()=>navigate(-1)} className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors mb-8 font-medium">
          <FiArrowLeft size={18}/> Back
        </button>

        <div className="glass-card p-8 mb-8" style={{borderColor:`${edu.color}30`}}>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 bg-accent/10 border border-accent/20">{edu.icon}</div>
            <div>
              <h1 className="font-display font-black text-3xl text-textPrimary">{edu.degree}</h1>
              <p className="text-accent font-semibold mt-1">{edu.field}</p>
              <p className="text-textSecondary mt-1">{edu.institution}</p>
              <p className="text-textSecondary/60 text-sm">{edu.location}</p>
              <div className="flex gap-3 mt-3 flex-wrap">
                <span className="text-xs font-mono text-textSecondary bg-border px-3 py-1 rounded-full">{edu.period}</span>
                <span className="text-xs font-mono text-accent3 bg-accent3/10 px-3 py-1 rounded-full">{edu.score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">📚 Relevant Coursework</h2>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map(c=>(
                <span key={c} className="px-3 py-1.5 text-sm font-mono text-accent bg-accent/10 border border-accent/20 rounded-lg">{c}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">🏆 Achievements</h2>
            <ul className="space-y-3">
              {edu.achievements.map((a,i)=>(
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span className="text-accent3">★</span>{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
