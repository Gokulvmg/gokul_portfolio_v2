import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { galleryImages } from '../data/portfolio'
import Footer from '../components/Footer'

const categories = ['All', ...new Set(galleryImages.map(g => g.category))]

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(g => g.category === active)

  const prev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox(i => (i + 1) % filtered.length)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors font-medium">
            <FiArrowLeft size={18}/> Back
          </Link>
        </div>

        <div className="text-center mb-12">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Visual Story</span>
          <h1 className="section-title mt-3">Photo <span className="gradient-text">Gallery</span></h1>
          <p className="text-textSecondary mt-4">Internships, events, workshops, and memorable moments</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${active===cat?'border-accent text-accent bg-accent/10':'border-border text-textSecondary hover:border-accent/40 hover:text-textPrimary'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div key={`${img.src}-${i}`} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.04}}
              className="break-inside-avoid glass-card overflow-hidden cursor-pointer group relative"
              onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.caption} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-[200] bg-bg/96 flex items-center justify-center p-4">
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-textSecondary hover:text-accent z-10">
              <FiX size={18}/>
            </button>
            <button onClick={prev} className="absolute left-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-textSecondary hover:text-accent z-10">
              <FiChevronLeft size={20}/>
            </button>
            <button onClick={next} className="absolute right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-textSecondary hover:text-accent z-10">
              <FiChevronRight size={20}/>
            </button>
            <motion.div key={lightbox} initial={{scale:0.85,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.85,opacity:0}}
              className="max-w-3xl w-full">
              <img src={filtered[lightbox].src} alt={filtered[lightbox].caption} className="w-full rounded-xl max-h-[80vh] object-contain" />
              <p className="text-center text-textSecondary text-sm mt-3">{filtered[lightbox].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  )
}
