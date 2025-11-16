import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import ProjectsShowcase from './components/ProjectsShowcase'
import ActivityDashboard from './components/ActivityDashboard'
import Publications from './components/Publications'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-dark-bg grid-pattern">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <ProjectsShowcase />
      <ActivityDashboard />
      <Publications />
      <Timeline />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

