import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, FileText, Award, Mail } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-6'
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-dark-bg/95 backdrop-blur-lg" />
            <motion.div
              className="absolute top-20 left-0 right-0 glass rounded-b-2xl p-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-text-primary hover:text-neon-blue transition-colors flex items-center gap-3 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon size={20} />
                    <span className="text-lg">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

