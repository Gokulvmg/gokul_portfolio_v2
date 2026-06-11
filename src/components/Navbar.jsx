import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { useScrollProgress } from '../hooks/useScrollProgress'

function getGreeting() {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return { text: 'Good Morning', emoji: '☀️' }
  if (h >= 12 && h < 17) return { text: 'Good Afternoon', emoji: '🌤️' }
  return { text: 'Good Evening', emoji: '🌙' }
}

const navItems = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Leadership', href: '/#leadership' },
  { label: 'Education', href: '/#education' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [greeting, setGreeting] = useState(getGreeting())
  const progress = useScrollProgress()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    const interval = setInterval(() => setGreeting(getGreeting()), 60000)
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(interval) }
  }, [])

  return (
    <>
      <motion.div className="fixed top-0 left-0 h-0.5 z-[100]"
        style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#00D9FF,#7C3AED)' }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-border' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Greeting */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-xs font-mono text-textSecondary">
              {greeting.text} {greeting.emoji}
            </span>
            <span className="font-display font-black text-lg gradient-text tracking-tight">Gokul VM</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 text-sm">
            {navItems.map((item) => {
              const isPage = !item.href.includes('#')
              const active = isPage && location.pathname === item.href
              return isPage ? (
                <Link key={item.label} to={item.href}
                  className={`px-3 py-2 rounded-lg transition-colors font-medium ${active ? 'text-accent bg-accent/10' : 'text-textSecondary hover:text-textPrimary'}`}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href}
                  className="px-3 py-2 rounded-lg text-textSecondary hover:text-textPrimary transition-colors font-medium">
                  {item.label}
                </a>
              )
            })}
          </div>

          <a href="/resume.pdf" download className="hidden lg:block btn-primary text-sm py-2 px-5">Download CV</a>

          <button className="lg:hidden text-textPrimary p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} className="lg:hidden glass border-t border-border px-5 pb-5">
              <div className="flex flex-col gap-1 pt-4">
                {navItems.map((item) => {
                  const isPage = !item.href.includes('#')
                  return isPage ? (
                    <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)}
                      className="text-textSecondary hover:text-accent py-2.5 px-4 rounded-lg hover:bg-accent/5 transition-all font-medium">
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                      className="text-textSecondary hover:text-accent py-2.5 px-4 rounded-lg hover:bg-accent/5 transition-all font-medium">
                      {item.label}
                    </a>
                  )
                })}
                <a href="/resume.pdf" download className="btn-primary text-center mt-3">Download CV</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
