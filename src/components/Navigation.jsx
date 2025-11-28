import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code, Briefcase, FileText, Award, Mail } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  // Mobile nav is now inline; no hamburger menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', icon: Home, href: '#hero' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Skills', icon: Code, href: '#skills' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Publications', icon: FileText, href: '#publications' },
    { name: 'Experience', icon: Award, href: '#experience' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-6'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a
              href="#hero"
              className="text-xl font-heading font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              S Rupesh
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-neon-blue transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
            {/* No hamburger button; mobile nav shown below */}
          </div>
        </div>
      </motion.nav>

      {/* Spacer to offset inline mobile nav height */}
      <div className="md:hidden h-16" aria-hidden="true" />

      {/* Mobile Navigation (inline) */}
      <nav className="md:hidden fixed top-16 left-0 right-0 z-30">
        <div className="px-4">
          <div className="glass rounded-xl p-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="shrink-0 text-text-secondary hover:text-neon-blue transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation