import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, ChevronDown, FileText } from 'lucide-react'
import { publications } from '../data/portfolioData'

const PublicationCard = ({ publication, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      className="glass rounded-xl p-6 mb-6 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold gradient-text mb-1">
                {publication.title}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-text-secondary">
                <span>{publication.venue}</span>
                <span>•</span>
                <span>{publication.date}</span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-neon-blue">Abstract</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-neon-green">Key Contributions</h4>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                      {publication.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={publication.doiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-sm">DOI: {publication.doi}</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          className="flex-shrink-0"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-text-secondary" size={24} />
        </motion.button>
      </div>
    </motion.div>
  )
}

const Publications = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Publications & Research
        </motion.h2>

        <motion.p
          className="text-center text-text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Published research papers in IEEE conferences, showcasing innovative solutions in IoT, 
          AI/ML, and embedded systems.
        </motion.p>

        <div className="space-y-6">
          {publications.map((publication, index) => (
            <PublicationCard key={publication.id} publication={publication} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

