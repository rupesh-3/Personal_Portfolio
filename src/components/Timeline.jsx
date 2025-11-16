import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { experiences } from '../data/portfolioData'

const Timeline = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-green to-neon-purple transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0
              const cardRef = useRef(null)
              const cardInView = useInView(cardRef, { once: true, margin: '-50px' })

              return (
                <motion.div
                  key={experience.id}
                  ref={cardRef}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={cardInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className="w-4 h-4 bg-neon-blue rounded-full border-4 border-dark-bg neon-blue-glow"
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      className="glass rounded-xl p-6 hover:scale-105 transition-transform"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <Briefcase className="text-neon-blue flex-shrink-0 mt-1" size={24} />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold gradient-text mb-1">
                            {experience.role}
                          </h3>
                          <h4 className="text-lg font-semibold text-text-primary mb-2">
                            {experience.company}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="text-text-secondary mb-4">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-sm mb-2 text-neon-green">Key Projects:</h5>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                          {experience.projects.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs glass px-2 py-1 rounded text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
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

export default Timeline

