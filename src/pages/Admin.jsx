import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiActivity, FiAlertCircle, FiCheck, FiChevronDown, FiChevronUp, FiEdit3, FiExternalLink, FiFolder, FiGrid, FiImage, FiLogOut, FiPlus, FiRefreshCcw, FiSave, FiSearch, FiSettings, FiTrash2, FiUser } from 'react-icons/fi'
import { createBlank, initialContent, loadContent, resetContent, saveContent, sectionConfig } from '../admin/adminStore'
import './admin.css'

const editableFields = {
  home: [['name', 'Name'], ['title', 'Professional title'], ['intro', 'Short introduction'], ['heroDescription', 'Hero description'], ['profileImage', 'Profile image URL'], ['resume', 'Resume / CV link'], ['github', 'GitHub link'], ['linkedin', 'LinkedIn link'], ['ctaText', 'CTA text'], ['ctaLink', 'CTA link']],
  about: [['heading', 'Heading'], ['description', 'Description'], ['objective', 'Professional objective'], ['image', 'Profile image URL']],
  contact: [['heading', 'Heading'], ['description', 'Description'], ['email', 'Email'], ['phone', 'Phone'], ['location', 'Location'], ['linkedin', 'LinkedIn'], ['github', 'GitHub']],
}

const listFields = {
  skills: [['name', 'Skill name'], ['category', 'Category'], ['level', 'Level %'], ['icon', 'Icon']],
  projects: [['title', 'Project title'], ['subtitle', 'Type'], ['description', 'Short description'], ['technologies', 'Technologies'], ['image', 'Cover image URL'], ['github', 'GitHub URL'], ['demo', 'Live URL']],
  experience: [['title', 'Job title'], ['company', 'Company'], ['period', 'Dates'], ['description', 'Description'], ['logo', 'Logo URL']],
  leadership: [['title', 'Role'], ['organization', 'Organization'], ['description', 'Description'], ['image', 'Image URL']],
  education: [['title', 'Degree / course'], ['institution', 'Institution'], ['period', 'Dates'], ['description', 'Description']],
  certificates: [['title', 'Certificate name'], ['organization', 'Issuer'], ['image', 'Certificate image URL'], ['url', 'Certificate URL']],
  gallery: [['title', 'Image title'], ['caption', 'Caption'], ['image', 'Image URL']],
}

function Metric({ label, value, tone }) {
  return <div className={`admin-metric ${tone}`}><span>{label}</span><strong>{value}</strong><small>Live workspace</small></div>
}

function Field({ field, value, onChange }) {
  const multiline = ['description', 'objective', 'intro', 'heroDescription', 'caption'].includes(field)
  return <label className="admin-field"><span>{field.replaceAll(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase())}</span>{multiline ? <textarea rows={4} value={value ?? ''} onChange={(event) => onChange(event.target.value)} /> : <input value={value ?? ''} onChange={(event) => onChange(event.target.value)} />}</label>
}

export default function Admin() {
  const navigate = useNavigate()
  const [content, setContent] = useState(initialContent)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [selectedId, setSelectedId] = useState(null)
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  useEffect(() => {
    setContent(loadContent())
    setIsLoggedIn(window.sessionStorage.getItem('portfolio-admin-session') === 'active')
  }, [])

  useEffect(() => {
    if (!notice) return undefined
    const timer = window.setTimeout(() => setNotice(''), 2800)
    return () => window.clearTimeout(timer)
  }, [notice])

  const config = sectionConfig.find((item) => item.key === activeSection)
  const items = Array.isArray(content[activeSection]) ? content[activeSection] : []
  const filteredItems = items.filter((item) => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()))
  const selected = items.find((item) => item.id === selectedId)
  const activeCount = Object.values(content).reduce((total, value) => total + (Array.isArray(value) ? value.filter((item) => item.active !== false).length : 0), 0)
  const itemLabel = config?.singular ?? 'entry'

  function login(event) {
    event.preventDefault()
    const configuredUsername = import.meta.env.VITE_ADMIN_USERNAME || 'admin'
    const configuredPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'portfolio-demo'
    if (credentials.username === configuredUsername && credentials.password === configuredPassword) {
      window.sessionStorage.setItem('portfolio-admin-session', 'active')
      setIsLoggedIn(true)
      setNotice('Welcome back. Your workspace is ready.')
    } else setNotice('Invalid credentials. Try the local demo account.')
  }

  function logout() {
    window.sessionStorage.removeItem('portfolio-admin-session')
    setIsLoggedIn(false)
    setCredentials({ username: '', password: '' })
  }

  function selectSection(key) {
    setActiveSection(key)
    setSelectedId(null)
    setQuery('')
  }

  function updateItem(key, value) {
    setContent((current) => ({ ...current, [activeSection]: { ...current[activeSection], [key]: value } }))
  }

  function updateListItem(key, value) {
    setContent((current) => ({ ...current, [activeSection]: current[activeSection].map((item) => item.id === selectedId ? { ...item, [key]: value } : item) }))
  }

  function addItem() {
    const item = createBlank(activeSection)
    setContent((current) => ({ ...current, [activeSection]: [...(current[activeSection] ?? []), item] }))
    setSelectedId(item.id)
  }

  function deleteItem(id) {
    if (!window.confirm(`Delete this ${itemLabel}? This cannot be undone.`)) return
    setContent((current) => ({ ...current, [activeSection]: current[activeSection].filter((item) => item.id !== id) }))
    setSelectedId(null)
    setNotice(`${itemLabel} deleted.`)
  }

  function moveItem(id, direction) {
    const current = [...content[activeSection]]
    const index = current.findIndex((item) => item.id === id)
    const nextIndex = index + direction
    if (nextIndex < 0 || nextIndex >= current.length) return
    ;[current[index], current[nextIndex]] = [current[nextIndex], current[index]]
    setContent((value) => ({ ...value, [activeSection]: current.map((item, itemIndex) => ({ ...item, order: itemIndex + 1 })) }))
  }

  function save() {
    saveContent(content)
    setNotice('Changes saved to this browser workspace.')
  }

  function reset() {
    if (!window.confirm('Reset all local edits to the original portfolio content?')) return
    setContent(resetContent())
    setSelectedId(null)
    setNotice('Portfolio content reset.')
  }

  if (!isLoggedIn) return <main className="admin-login"><div className="admin-login-card"><div className="admin-brand"><span className="admin-brand-mark">G</span><div><strong>Gokul VM</strong><small>Portfolio control room</small></div></div><div className="admin-login-copy"><span className="admin-eyebrow">Private workspace</span><h1>Welcome to your<br /><em>portfolio CMS.</em></h1><p>Manage the content behind your portfolio with a calm, focused editing workspace.</p></div><form onSubmit={login} className="admin-login-form"><label>Username<input autoComplete="username" value={credentials.username} onChange={(event) => setCredentials({ ...credentials, username: event.target.value })} placeholder="admin" /></label><label>Password<input type="password" autoComplete="current-password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} placeholder="••••••••" /></label><button className="admin-primary" type="submit">Enter workspace <FiExternalLink /></button></form><div className="admin-demo-hint"><FiAlertCircle /><span>Local preview: <b>admin</b> / <b>portfolio-demo</b><br />For production, connect server-side auth and database credentials.</span></div><button className="admin-back" onClick={() => navigate('/')}>← Return to portfolio</button></div></main>

  return <div className="admin-shell"><aside className="admin-sidebar"><div className="admin-brand"><span className="admin-brand-mark">G</span><div><strong>Gokul VM</strong><small>Portfolio CMS</small></div></div><div className="admin-workspace"><span>WORKSPACE</span><strong>Personal portfolio</strong><small><i /> Changes are local</small></div><nav className="admin-nav"><button className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => selectSection('dashboard')}><FiGrid /> Dashboard</button><span className="admin-nav-label">CONTENT</span>{sectionConfig.map((item) => <button key={item.key} className={activeSection === item.key ? 'active' : ''} onClick={() => selectSection(item.key)}><FiFolder /> {item.label}<small>{Array.isArray(content[item.key]) ? content[item.key].length : '—'}</small></button>)}</nav><div className="admin-sidebar-bottom"><button onClick={() => navigate('/')}><FiExternalLink /> View portfolio</button><button onClick={logout}><FiLogOut /> Sign out</button></div></aside><main className="admin-main"><header className="admin-topbar"><div><span className="admin-breadcrumb">Portfolio / {activeSection === 'dashboard' ? 'Overview' : config?.label}</span><h2>{activeSection === 'dashboard' ? 'Good morning, Gokul' : config?.label}</h2></div><div className="admin-top-actions"><button className="admin-icon-button" title="Settings"><FiSettings /></button><button className="admin-save" onClick={save}><FiSave /> Save changes</button><span className="admin-avatar">GV</span></div></header>{notice && <div className="admin-notice"><FiCheck /> {notice}</div>}{activeSection === 'dashboard' ? <Dashboard content={content} activeCount={activeCount} onSelect={selectSection} onReset={reset} /> : <section className="admin-section"><div className="admin-section-heading"><div><span className="admin-eyebrow">Manage {config?.label.toLowerCase()}</span><h1>{config?.label} <span>{Array.isArray(content[activeSection]) ? content[activeSection].length : '1'} records</span></h1></div>{Array.isArray(content[activeSection]) && <button className="admin-primary" onClick={addItem}><FiPlus /> Add {itemLabel}</button>}</div>{Array.isArray(content[activeSection]) ? <div className="admin-content-grid"><div className="admin-list-panel"><div className="admin-list-toolbar"><div className="admin-search"><FiSearch /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${config?.label.toLowerCase()}...`} /></div><span>{filteredItems.length} visible</span></div>{filteredItems.map((item) => <button key={item.id} className={`admin-list-row ${selectedId === item.id ? 'selected' : ''}`} onClick={() => setSelectedId(item.id)}><span className="admin-row-icon">{item.icon || <FiImage />}</span><span><strong>{item.title || item.name || item.role || item.degree || item.filename || 'Untitled entry'}</strong><small>{item.company || item.organization || item.category || item.institution || item.caption || 'Portfolio content'}</small></span><i className={item.active === false ? 'inactive' : ''}>{item.active === false ? 'Draft' : 'Live'}</i></button>)}{!filteredItems.length && <div className="admin-empty"><FiFolder /><strong>No entries found</strong><span>Add your first {itemLabel} to get started.</span></div>}</div><div className="admin-editor-panel">{selected ? <><div className="admin-editor-head"><div><span className="admin-eyebrow">Editing record</span><h3>{selected.title || selected.name || 'Untitled entry'}</h3></div><button className="admin-danger" onClick={() => deleteItem(selected.id)}><FiTrash2 /> Delete</button></div><div className="admin-form-grid">{(listFields[activeSection] || []).map(([field, label]) => <label key={field} className="admin-field"><span>{label}</span>{['description', 'caption'].includes(field) ? <textarea rows={4} value={selected[field] ?? ''} onChange={(event) => updateListItem(field, event.target.value)} /> : <input value={selected[field] ?? ''} onChange={(event) => updateListItem(field, event.target.value)} />}</label>)}<label className="admin-switch"><input type="checkbox" checked={selected.active !== false} onChange={(event) => updateListItem('active', event.target.checked)} /><span><b>Published</b><small>Show this entry on the public portfolio</small></span></label>{['projects', 'skills', 'experience', 'leadership', 'education', 'gallery'].includes(activeSection) && <div className="admin-reorder"><span>Display order</span><button onClick={() => moveItem(selected.id, -1)}><FiChevronUp /></button><button onClick={() => moveItem(selected.id, 1)}><FiChevronDown /></button></div>}</div></> : <div className="admin-editor-empty"><FiEdit3 /><strong>Select an entry to edit</strong><span>Choose a record from the list or create a new one.</span></div>}</div></div> : <div className="admin-single-editor"><div className="admin-editor-head"><div><span className="admin-eyebrow">Single page content</span><h3>Keep your story current</h3></div><FiUser className="admin-editor-symbol" /></div><div className="admin-form-grid">{editableFields[activeSection]?.map(([field, label]) => <Field key={field} field={label} value={content[activeSection]?.[field]} onChange={(value) => updateItem(field, value)} />)}</div></div>}</section>}</main></div>
}

function Dashboard({ content, activeCount, onSelect, onReset }) {
  const recent = useMemo(() => Object.entries(content).filter(([, value]) => Array.isArray(value)).flatMap(([key, value]) => value.slice(0, 2).map((item) => ({ ...item, section: key }))).slice(0, 5), [content])
  return <section className="admin-dashboard"><div className="admin-welcome"><div><span className="admin-eyebrow">Tuesday, 12 September 2026</span><h1>Your portfolio,<br /><em>in motion.</em></h1><p>Keep every detail sharp, current, and ready for the next opportunity.</p></div><div className="admin-orbit"><FiActivity /><span>Workspace<br /><b>online</b></span></div></div><div className="admin-metrics"><Metric label="Published entries" value={activeCount} tone="cyan" /><Metric label="Content sections" value="10" tone="violet" /><Metric label="Last saved" value="Now" tone="amber" /><Metric label="Visibility" value="Public" tone="green" /></div><div className="admin-dashboard-grid"><div className="admin-panel"><div className="admin-panel-heading"><div><span className="admin-eyebrow">Quick access</span><h3>Manage content</h3></div><FiGrid /></div><div className="admin-quick-grid">{sectionConfig.map((item) => <button key={item.key} onClick={() => onSelect(item.key)}><span><FiFolder /> {item.label}</span><b>{Array.isArray(content[item.key]) ? content[item.key].length : 'Edit'}</b></button>)}</div></div><div className="admin-panel"><div className="admin-panel-heading"><div><span className="admin-eyebrow">Workspace activity</span><h3>Recent records</h3></div><FiActivity /></div><div className="admin-activity">{recent.map((item) => <div key={`${item.section}-${item.id}`}><span className="admin-row-icon">{item.icon || <FiImage />}</span><span><strong>{item.title || item.name || item.role || item.degree || 'Untitled'}</strong><small>Updated in {item.section}</small></span><i>Live</i></div>)}</div><button className="admin-reset" onClick={onReset}><FiRefreshCcw /> Reset local content</button></div></div></section>
}
