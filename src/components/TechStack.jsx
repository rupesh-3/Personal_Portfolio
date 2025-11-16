import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolioData'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getColorClass = (color) => {
    const colors = {
      'neon-blue': 'border-neon-blue text-neon-blue',
      'neon-green': 'border-neon-green text-neon-green',
      'neon-purple': 'border-neon-purple text-neon-purple',
    }
    return colors[color] || colors['neon-blue']
  }

  const getGlowClass = (color) => {
    const glows = {
      'neon-blue': 'hover:neon-blue-glow',
      'neon-green': 'hover:neon-green-glow',
      'neon-purple': 'hover:neon-purple-glow',
    }
    return glows[color] || glows['neon-blue']
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 2,
                z: 50
              }}
            >
              <h3 className={`text-xl font-semibold mb-4 pb-2 border-b-2 ${getColorClass(category.color)}`}>
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-primary">{skill.name}</span>
                      <span className="text-text-secondary">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-dark-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full border ${getColorClass(category.color)} ${getGlowClass(category.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        style={{
                          background: category.color === 'neon-blue' 
                            ? 'linear-gradient(90deg, #00D9FF, #00A8CC)'
                            : category.color === 'neon-green'
                            ? 'linear-gradient(90deg, #39FF14, #2ECC40)'
                            : 'linear-gradient(90deg, #B429FF, #8B1AFF)'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

