import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { experience } from '../data/portfolio'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function InternshipDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const exp = experience.find(e => e.id === id)
  const [activeImg, setActiveImg] = useState(0)

  if (!exp) return <div className="min-h-screen flex items-center justify-center pt-24 text-textSecondary">Not found</div>

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button onClick={()=>navigate(-1)} className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors mb-8 font-medium">
          <FiArrowLeft size={18}/> Back
        </button>

        {/* Header */}
        <div className="glass-card p-8 mb-8" style={{borderColor:`${exp.color}30`}}>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-border bg-card flex-shrink-0">
              <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-2" onError={e=>{e.target.parentElement.innerHTML='<div class="w-full h-full flex items-center justify-center text-3xl">🏢</div>'}} />
            </div>
            <div>
              <h1 className="font-display font-black text-3xl text-textPrimary">{exp.role}</h1>
              <p className="font-bold text-lg mt-1" style={{color:exp.color}}>{exp.company}</p>
              <span className="text-sm font-mono text-textSecondary bg-border px-3 py-1 rounded-full mt-2 inline-block">{exp.period}</span>
            </div>
          </div>
          <p className="text-textSecondary leading-relaxed mt-5">{exp.desc}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map(t=>(
              <span key={t} className="px-3 py-1 text-sm font-mono rounded-full border"
                style={{borderColor:`${exp.color}33`,color:exp.color,background:`${exp.color}0D`}}>{t}</span>
            ))}
          </div>
        </div>

        {/* Certificate */}
        {exp.cert && (
          <div className="glass-card p-6 mb-8">
            <h2 className="font-display font-bold text-xl text-textPrimary mb-5">📜 Internship Certificate</h2>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={exp.cert} alt="certificate" className="w-full object-contain max-h-96" />
            </div>
          </div>
        )}

        {/* Photos */}
        {exp.images && exp.images.length > 0 && (
          <div className="glass-card p-6 mb-8">
            <h2 className="font-display font-bold text-xl text-textPrimary mb-5">📸 Internship Photos</h2>
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-video bg-card">
              <img src={exp.images[activeImg]} alt="internship" className="w-full h-full object-contain" />
            </div>
            <div className="flex gap-3">
              {exp.images.map((img,i)=>(
                <button key={i} onClick={()=>setActiveImg(i)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImg===i?'border-accent':'border-border'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">📋 Responsibilities</h2>
            <ul className="space-y-2">
              {exp.responsibilities.map((r,i)=>(
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm"><span className="text-accent mt-0.5">▸</span>{r}</li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">🛠 Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-5">
              {exp.technologies.map(t=>(
                <span key={t} className="px-3 py-1.5 text-sm font-mono rounded-lg"
                  style={{background:`${exp.color}12`,color:exp.color,border:`1px solid ${exp.color}30`}}>{t}</span>
              ))}
            </div>
            <h3 className="font-display font-semibold text-textPrimary mb-3">Skills Learned</h3>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map(s=>(
                <span key={s} className="px-2.5 py-1 text-xs text-textSecondary border border-border rounded-full">{s}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 md:col-span-2">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">🏆 Key Achievements</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {exp.achievements.map((a,i)=>(
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <span className="text-accent3 text-lg flex-shrink-0">★</span>
                  <p className="text-textSecondary text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
