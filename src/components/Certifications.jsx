import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Medal } from 'lucide-react'
import { certifications, achievements } from '../data/portfolioData'

const Certifications = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

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

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: '#00D9FF' }}
                >
                  <Award className="text-neon-blue mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-semibold mb-1 text-sm">{cert.name}</h4>
                  <p className="text-text-secondary text-xs mb-2">{cert.platform}</p>
                  <span className="text-xs glass px-2 py-1 rounded-full text-text-secondary">
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

              const getIcon = () => {
                if (achievement.title.toLowerCase().includes('runner')) return Trophy
                if (achievement.title.toLowerCase().includes('head') || achievement.title.toLowerCase().includes('member')) return Medal
                return Award
              }

              const Icon = getIcon()

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
                      <Icon className="text-neon-green" size={24} />
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

