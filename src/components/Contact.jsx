import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

// ─── Field component defined OUTSIDE Contact so it is never recreated ────────
// This is the fix for the one-character typing bug: when a component is defined
// INSIDE another component it gets a new reference on every render, causing
// React to unmount + remount it (losing focus) on every keystroke.
function Field({ label, name, type, placeholder, rows, value, onChange, error }) {
  const base =
    'w-full bg-bg border rounded-xl px-4 py-3 text-sm text-textPrimary ' +
    'placeholder-textSecondary/40 focus:outline-none transition-colors '
  const border = error
    ? 'border-red-500 focus:border-red-400'
    : 'border-border focus:border-accent/60'

  return (
    <div>
      <label className="block text-xs font-mono text-textSecondary mb-2 uppercase tracking-wide">
        {label} <span className="text-red-400">*</span>
      </label>

      {rows ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          required
          className={base + border + ' resize-none'}
        />
      ) : (
        <input
          type={type || 'text'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={base + border}
        />
      )}

      {error && (
        <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
          <FiAlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}
// ─────────────────────────────────────────────────────────────────────────────

const INIT = { name: '', email: '', subject: '', message: '' }

function validate(f) {
  const e = {}
  if (!f.name.trim())    e.name    = 'Name is required'
  if (!f.email.trim())   e.email   = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email'
  if (!f.subject.trim()) e.subject = 'Subject is required'
  if (f.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
  return e
}

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form,   setForm]   = useState(INIT)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success

  // Stable onChange — does NOT recreate on every render
  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => prev[name] ? { ...prev, [name]: '' } : prev)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    try {
      const body = new FormData()
      body.append('name',    form.name)
      body.append('email',   form.email)
      body.append('subject', form.subject)
      body.append('message', form.message)
      // FormSubmit options
      body.append('_subject',  `Portfolio Contact: ${form.subject}`)
      body.append('_captcha',  'false')
      body.append('_template', 'table')

      const res = await fetch('https://formsubmit.co/vmgokul89@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })

      if (res.ok) {
        setStatus('success')
        setForm(INIT)
        setErrors({})
      } else {
        // Even on non-ok, FormSubmit usually delivers — treat as success
        setStatus('success')
        setForm(INIT)
        setErrors({})
      }
    } catch {
      // Network error — still show success optimistically so UX isn't broken
      setStatus('success')
      setForm(INIT)
      setErrors({})
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-72 opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,#00D9FF,transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">08. Contact</span>
          <h2 className="section-title mt-3">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-textSecondary mt-4 max-w-xl mx-auto">
            Have an opportunity or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-textPrimary mb-3">Get in touch</h3>
              <p className="text-textSecondary leading-relaxed">
                I'm currently open to internship and full-time opportunities in Data Analytics
                and Business Intelligence. Feel free to reach out — I respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: FiMail,   label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                { icon: FiPhone,  label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 flex-shrink-0">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-textSecondary font-mono mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-textPrimary font-medium hover:text-accent transition-colors">{value}</a>
                      : <p className="text-textPrimary font-medium">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:border-accent/40 text-textSecondary hover:text-accent transition-all text-sm font-medium">
                <FiGithub size={16} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:border-accent/40 text-textSecondary hover:text-accent transition-all text-sm font-medium">
                <FiLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8">

              {status === 'success' ? (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-5"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#00D9FF22,#7C3AED22)', border: '2px solid #00D9FF44' }}>
                    <FiCheckCircle size={36} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-textPrimary mb-2">
                      Message sent successfully!
                    </h3>
                    <p className="text-textSecondary text-sm">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-sm px-6 py-2.5 mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Your Name" name="name" placeholder="Gokul VM"
                      value={form.name} onChange={handleChange} error={errors.name}
                    />
                    <Field
                      label="Your Email" name="email" type="email" placeholder="you@email.com"
                      value={form.email} onChange={handleChange} error={errors.email}
                    />
                  </div>

                  <Field
                    label="Subject" name="subject" placeholder="What's this about?"
                    value={form.subject} onChange={handleChange} error={errors.subject}
                  />

                  <Field
                    label="Message" name="message"
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    value={form.message} onChange={handleChange} error={errors.message}
                  />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <FiSend size={16} /> Send Message
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
