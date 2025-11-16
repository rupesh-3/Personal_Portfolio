import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Copy, Check } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's Build Something Together
        </motion.h2>

        <motion.p
          className="text-center text-text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Open to internships, collaborations, and exciting opportunities in IoT, Embedded Systems, AI/ML, and Data Analytics.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-text-primary placeholder-text-secondary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-text-primary placeholder-text-secondary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-text-primary placeholder-text-secondary resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:border-neon-blue border border-transparent transition-all group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 glass rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    <Mail className="text-neon-blue" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-secondary text-sm">Email</p>
                    <p className="text-text-primary font-medium">{personalInfo.email}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      copyToClipboard(personalInfo.email)
                    }}
                    className="p-2 glass rounded-lg hover:border-neon-green transition-all"
                  >
                    {copied ? (
                      <Check className="text-neon-green" size={20} />
                    ) : (
                      <Copy className="text-text-secondary" size={20} />
                    )}
                  </button>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:border-neon-green border border-transparent transition-all group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 glass rounded-lg group-hover:bg-neon-green/20 transition-colors">
                    <Phone className="text-neon-green" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-secondary text-sm">Phone</p>
                    <p className="text-text-primary font-medium">{personalInfo.phone}</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="p-3 glass rounded-lg">
                    <MapPin className="text-neon-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Location</p>
                    <p className="text-text-primary font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-text-secondary text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-neon-blue transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="text-neon-blue" size={20} />
                  </motion.a>
                  
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-neon-green transition-all"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="text-neon-green" size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 inline-flex items-center gap-2 glass rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

