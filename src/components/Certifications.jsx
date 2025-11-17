import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Medal, Zap, Brain, Code, Palette, Cloud, Briefcase, Star, Target, Users, Lightbulb } from 'lucide-react'
import { certifications, achievements } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const Certifications = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { theme } = useTheme()
  const textSecondaryClass = theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'

  // Map certifications to unique icons
  const iconMap = {
    'Gen AI Mastermind': Brain,
    'ReactJS and CSS': Code,
    'Power BI': Briefcase,
    'Business Analysis & Process Management': Award,
    'Gen AI Engineering Mastermind': Zap,
    'UI/UX Intermediate': Palette,
    'IBM Essentials in Cloud': Cloud,
    'Become a MAANG Engineer': Trophy,
    'The AI Revolution': Medal,
  }

  const getIconForCertification = (certName) => {
    return iconMap[certName] || Award
  }

  // Map achievements to unique icons based on ID
  const achievementIconMap = {
    1: Trophy,      // Runner-up, SparkUp Startup Pitching
    2: Zap,         // ByteSafe: Cybersecurity Workshop
    3: Palette,     // Creatives & Designing Head
    4: Star,        // Apple Centre of Excellence Recognition
    5: Users,       // Executive Member
  }

  const getIconForAchievement = (achievementId) => {
    return achievementIconMap[achievementId] || Award
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-text-primary">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => {
              const cardRef = useRef(null)
              const cardInView = useInView(cardRef, { once: true, margin: '-50px' })
              const IconComponent = getIconForCertification(cert.name)

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer group min-h-[160px] flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: '#00D9FF' }}
                >
                  <IconComponent className="text-neon-blue mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-semibold mb-1 text-sm">{cert.name}</h4>
                  <p className={`${textSecondaryClass} text-xs mb-2`}>{cert.platform}</p>
                  <span className={`text-xs glass px-2 py-1 rounded-full ${textSecondaryClass}`}>
                    {cert.category}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-text-primary">
            Achievements & Leadership
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const cardRef = useRef(null)
              const cardInView = useInView(cardRef, { once: true, margin: '-50px' })
              const IconComponent = getIconForAchievement(achievement.id)

              return (
                <motion.div
                  key={achievement.id}
                  ref={cardRef}
                  className="glass rounded-xl p-6 hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 glass rounded-lg">
                      <IconComponent className="text-neon-green" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 gradient-text">
                        {achievement.title}
                      </h4>
                      <p className="text-text-secondary text-sm mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-text-secondary text-xs">
                        {achievement.period || achievement.date}
                      </p>
                      {achievement.description && (
                        <p className="text-text-secondary text-xs mt-2">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

