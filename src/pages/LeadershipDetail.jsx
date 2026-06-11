import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiDownload } from 'react-icons/fi'
import { leadership } from '../data/portfolio'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function LeadershipDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = leadership.find(l => l.id === id)
  const [activeImg, setActiveImg] = useState(0)

  if (!item) return (
    <div className="min-h-screen flex items-center justify-center pt-24 text-textSecondary">
      Not found
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors mb-8 font-medium">
          <FiArrowLeft size={18} /> Back
        </button>

        {/* Header card */}
        <div className="glass-card p-8 mb-8" style={{ borderColor: `${item.color}30` }}>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
              {item.icon}
            </div>
            <div>
              <h1 className="font-display font-black text-3xl" style={{ color: item.color }}>{item.role}</h1>
              <p className="text-textSecondary mt-1 leading-relaxed">{item.org}</p>
            </div>
          </div>
          <p className="text-textSecondary leading-relaxed mt-5">{item.desc}</p>
        </div>

        {/* Photo gallery — only if images exist */}
        {item.images && item.images.length > 0 && (
          <div className="glass-card p-6 mb-8">
            <h2 className="font-display font-bold text-xl text-textPrimary mb-5">📸 Photos</h2>
            <div className="relative rounded-xl overflow-hidden mb-4 bg-card"
              style={{ aspectRatio: '16/9' }}>
              <img src={item.images[activeImg]} alt=""
                className="w-full h-full object-contain" />
            </div>
            {item.images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {item.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImg === i ? 'border-accent' : 'border-border hover:border-accent/40'
                    }`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* NCC — no images, show PDF download prominently */}
        {item.id === 'ncc' && (
          <div className="glass-card p-8 mb-8 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(16,185,129,0.02))' }}>
            <div className="text-5xl mb-4">🏅</div>
            <h2 className="font-display font-bold text-xl text-textPrimary mb-2">NCC "A" Certificate</h2>
            <p className="text-textSecondary mb-6">Completed NCC training with Grade A. Download the official certificate below.</p>
            <a href={item.cert} download
              className="btn-primary inline-flex items-center gap-2 text-base px-8">
              <FiDownload size={18} /> Download NCC Certificate
            </a>
          </div>
        )}

        {/* Responsibilities & Achievements */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">📋 Responsibilities</h2>
            <ul className="space-y-3">
              {item.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span style={{ color: item.color }} className="mt-0.5 flex-shrink-0">▸</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg text-textPrimary mb-4">🏆 Achievements</h2>
            <ul className="space-y-3">
              {item.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                  <span className="text-accent3 flex-shrink-0">★</span>
                  {a}
                </li>
              ))}
            </ul>
            {item.cert && item.id !== 'ncc' && (
              <a href={item.cert} download
                className="mt-5 inline-flex items-center gap-2 btn-outline text-sm py-2">
                <FiDownload size={14} /> Download Certificate
              </a>
            )}
          </div>
        </div>

      </div>
      <Footer />
    </motion.div>
  )
}
