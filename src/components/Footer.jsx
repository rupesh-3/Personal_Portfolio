import { motion } from 'framer-motion'
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold gradient-text mb-4">
              S Rupesh
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Building intelligent systems that bridge hardware and software. 
              Passionate about IoT, Embedded Systems, AI/ML, and Data Analytics.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-neon-blue transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="text-neon-blue" size={18} />
              </motion.a>
              
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-neon-green transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="text-neon-green" size={18} />
              </motion.a>
              
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-neon-purple transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="text-neon-purple" size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-text-secondary hover:text-neon-blue transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-neon-blue transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#publications" className="text-text-secondary hover:text-neon-blue transition-colors text-sm">
                  Publications
                </a>
              </li>
              <li>
                <a href="#experience" className="text-text-secondary hover:text-neon-blue transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-neon-blue transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Contact</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © 2025 S Rupesh. Built with passion for innovation.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-neon-blue transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp className="text-neon-blue" size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

