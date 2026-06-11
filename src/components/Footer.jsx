import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-black text-xl gradient-text mb-1">Gokul VM</p>
            <p className="text-textSecondary text-sm">Aspiring Data Analyst · Power BI · Python</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-textSecondary hover:text-accent border border-border hover:border-accent/40 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-textSecondary text-sm flex items-center gap-1.5">
            © {year} Gokul VM. Made with <FiHeart size={13} className="text-red-400" /> in Coimbatore
          </p>
        </div>
      </div>
    </footer>
  )
}
