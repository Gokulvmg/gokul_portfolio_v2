import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiZoomIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { certificates } from '../data/portfolio'
import Footer from '../components/Footer'

const categories = ['All', ...new Set(certificates.map(c => c.category))]

export default function CertificatesPage() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? certificates : certificates.filter(c => c.category === active)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors font-medium">
            <FiArrowLeft size={18}/> Back
          </Link>
        </div>

        <div className="text-center mb-12">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Credentials</span>
          <h1 className="section-title mt-3">My <span className="gradient-text">Certifications</span></h1>
          <p className="text-textSecondary mt-4">Professional certifications and course completions</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${active===cat?'border-accent text-accent bg-accent/10':'border-border text-textSecondary hover:border-accent/40 hover:text-textPrimary'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((cert, i) => (
            <motion.div key={cert.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}}
              className="glass-card overflow-hidden group cursor-pointer" onClick={() => setSelected(cert)}>
              <div className="relative aspect-[4/3] overflow-hidden bg-card">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <FiZoomIn size={18}/>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-sm text-textPrimary truncate">{cert.title}</h3>
                <p className="text-xs text-textSecondary mt-1">{cert.issuer}</p>
                <span className="text-xs font-mono text-accent mt-1 inline-block">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-[200] bg-bg/95 flex items-center justify-center p-6" onClick={() => setSelected(null)}>
            <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.8,opacity:0}}
              className="glass-card max-w-2xl w-full overflow-hidden" onClick={e=>e.stopPropagation()}>
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-display font-bold text-textPrimary">{selected.title}</h3>
                  <p className="text-xs text-textSecondary">{selected.issuer}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href={selected.image} download className="w-9 h-9 rounded-lg flex items-center justify-center text-textSecondary hover:text-accent border border-border hover:border-accent/40 transition-all">
                    <FiDownload size={16}/>
                  </a>
                  <button onClick={() => setSelected(null)} className="w-9 h-9 rounded-lg flex items-center justify-center text-textSecondary hover:text-accent border border-border hover:border-accent/40 transition-all">
                    <FiX size={16}/>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <img src={selected.image} alt={selected.title} className="w-full rounded-lg" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  )
}
