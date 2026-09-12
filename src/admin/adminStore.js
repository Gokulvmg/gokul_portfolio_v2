import { personalInfo, skills, experience, projects, leadership, education, certificates, galleryImages } from '../data/portfolio'

const STORAGE_KEY = 'gokul-portfolio-admin-content'

export const sectionConfig = [
  { key: 'home', label: 'Home', singular: 'profile' },
  { key: 'about', label: 'About', singular: 'about detail' },
  { key: 'skills', label: 'Skills', singular: 'skill' },
  { key: 'experience', label: 'Experience', singular: 'experience' },
  { key: 'projects', label: 'Projects', singular: 'project' },
  { key: 'leadership', label: 'Leadership', singular: 'leadership entry' },
  { key: 'education', label: 'Education', singular: 'education entry' },
  { key: 'certificates', label: 'Certificates', singular: 'certificate' },
  { key: 'gallery', label: 'Gallery', singular: 'gallery image' },
  { key: 'contact', label: 'Contact', singular: 'contact details' },
]

export const initialContent = {
  home: { ...personalInfo, title: personalInfo.roles?.[0] ?? 'Data Analyst', intro: personalInfo.objective, heroDescription: personalInfo.about, resume: '/resume.pdf', ctaText: 'Let\'s Connect', ctaLink: '#contact' },
  about: { heading: 'About Me', description: personalInfo.about, objective: personalInfo.objective, image: '' },
  skills: skills.map((item, index) => ({ ...item, id: item.name.toLowerCase().replaceAll(' ', '-'), order: index + 1, active: true })),
  experience: experience.map((item, index) => ({ ...item, id: item.id, title: item.role, company: item.company, description: item.desc, order: index + 1, active: true })),
  projects: projects.map((item, index) => ({ ...item, id: item.id, description: item.desc, technologies: item.stack?.join(', '), image: item.cover, order: index + 1, featured: index === 0, active: true })),
  leadership: leadership.map((item, index) => ({ ...item, id: item.id, title: item.role, organization: item.org, description: item.desc, order: index + 1, active: true })),
  education: education.map((item, index) => ({ ...item, id: item.id, title: `${item.degree} — ${item.field}`, description: item.achievements?.join('. '), order: index + 1, active: true })),
  certificates: (certificates ?? []).map((item, index) => ({ ...item, id: item.id ?? `certificate-${index}`, order: index + 1, active: true })),
  gallery: (galleryImages ?? []).map((item, index) => ({ ...item, id: item.id ?? `gallery-${index}`, image: item.src, title: item.category, order: index + 1, active: true })),
  contact: { email: personalInfo.email, phone: personalInfo.phone, location: personalInfo.location, linkedin: personalInfo.linkedin, github: personalInfo.github, heading: 'Let\'s Connect', description: 'Have a project, opportunity, or question? Reach out and let\'s talk.' },
}

export function loadContent() {
  if (typeof window === 'undefined') return initialContent
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? { ...initialContent, ...JSON.parse(saved) } : initialContent
  } catch {
    return initialContent
  }
}

export function saveContent(content) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
}

export function resetContent() {
  window.localStorage.removeItem(STORAGE_KEY)
  return initialContent
}

export function createBlank(section) {
  const id = `${section}-${Date.now()}`
  const defaults = {
    skills: { id, name: 'New skill', category: 'Category', level: 75, icon: '✦', order: 1, active: true },
    projects: { id, title: 'New project', subtitle: 'Project type', description: 'Describe the project and the outcome.', technologies: 'React, SQL', github: '', demo: '', image: '', order: 1, featured: false, active: true },
    experience: { id, title: 'Role title', company: 'Company name', period: '2025 – Present', description: 'Describe your contribution.', tags: [], order: 1, active: true },
    leadership: { id, title: 'Leadership role', organization: 'Organization', description: 'Describe the impact.', order: 1, active: true },
    education: { id, title: 'Degree or course', institution: 'Institution', period: '2022 – 2026', description: 'Add details.', order: 1, active: true },
    certificates: { id, title: 'Certificate name', organization: 'Issuing organization', image: '', url: '', order: 1, active: true },
    gallery: { id, title: 'Gallery image', caption: '', image: '', order: 1, active: true },
  }
  return defaults[section] ?? { id, title: 'New entry', description: '', order: 1, active: true }
}
