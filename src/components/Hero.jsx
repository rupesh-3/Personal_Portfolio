import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight, Linkedin, Github } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import TypingEffect from './TypingEffect'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${theme === 'dark' ? 'bg-neon-blue/10' : 'bg-neon-blue/5'}`}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-neon-purple/10' : 'bg-neon-purple/5'}`}
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl ${theme === 'dark' ? 'bg-neon-green/10' : 'bg-neon-green/5'}`}
          animate={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="text-neon-blue text-lg mb-4 font-code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hey, I'm
            </motion.p>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-text-secondary mb-8 h-12 md:h-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypingEffect text={personalInfo.title} />
            </motion.div>

            <motion.p
              className="text-lg text-text-secondary mb-10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform neon-blue-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download="S_Rupesh_Resume.pdf"
                className="px-6 py-3 glass rounded-lg font-semibold flex items-center gap-2 hover:border-neon-green border border-transparent transition-all"
                whileHover={{ scale: 1.05, borderColor: '#39FF14' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 glass rounded-lg font-semibold flex items-center gap-2 hover:border-neon-purple border border-transparent transition-all"
                whileHover={{ scale: 1.05, borderColor: '#B429FF' }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-neon-blue transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} className="text-neon-blue" />
              </motion.a>
              
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-neon-green transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} className="text-neon-green" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture / Visual Element */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full gradient-border p-1 neon-blue-glow">
                <div className="w-full h-full rounded-full glass flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-bold gradient-text">
                      SR
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-lg px-3 py-1 text-sm font-semibold neon-green-glow"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Available
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-neon-blue rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

