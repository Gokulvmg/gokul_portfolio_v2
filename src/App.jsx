import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Particles from './components/Particles'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import InternshipDetail from './pages/InternshipDetail'
import LeadershipDetail from './pages/LeadershipDetail'
import EducationDetail from './pages/EducationDetail'
import CertificatesPage from './pages/CertificatesPage'
import GalleryPage from './pages/GalleryPage'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="noise-bg" />
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/internship/:id" element={<InternshipDetail />} />
            <Route path="/leadership/:id" element={<LeadershipDetail />} />
            <Route path="/education/:id" element={<EducationDetail />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <ScrollToTop />
    </>
  )
}
