import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import AnimatedCounter from './AnimatedCounter'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { theme } = useTheme()
  const textSecondaryClass = theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="glass rounded-2xl p-8 md:p-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold mb-8 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I'm a hands-on innovator passionate about solving real-world challenges through smart automation, 
            assistive devices, and sustainable systems. As a pre-final year Computer and Communication Engineering 
            student, I specialize in IoT, Embedded Systems, AI/ML, and Data Analytics. My focus is on practical 
            experimentation, continuous learning, and creating scalable, intelligent solutions that bridge hardware 
            and software.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            variants={itemVariants}
          >
            <div className="glass rounded-xl p-6 text-center hover:border-neon-blue border border-transparent transition-all min-h-[120px] flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter end={stats.cgpa} decimals={2} suffix="/10" />
              </div>
              <div className={textSecondaryClass}>CGPA</div>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:border-neon-green border border-transparent transition-all min-h-[120px] flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter end={stats.publications} suffix="+" />
              </div>
              <div className={textSecondaryClass}>IEEE Publications</div>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:border-neon-purple border border-transparent transition-all min-h-[120px] flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter end={stats.projects} suffix="+" />
              </div>
              <div className={textSecondaryClass}>Major Projects</div>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:border-neon-blue border border-transparent transition-all min-h-[120px] flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter end={stats.internships} suffix="" />
              </div>
              <div className={textSecondaryClass}>Internships</div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <MapPin className="text-neon-blue flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-text-secondary">{personalInfo.location}</p>
              </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <GraduationCap className="text-neon-green flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-text-secondary">{personalInfo.college}</p>
                <p className="text-text-secondary text-sm">{personalInfo.year}</p>
              </div>
            </div>
          </motion.div>

          {/* Currently Learning Badge */}
          <motion.div
            className="mt-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Currently Learning: Gen AI, Advanced IoT</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

