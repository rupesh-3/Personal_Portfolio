import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { skills, skillIcons } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { theme } = useTheme()
  const textPrimaryClass = theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'

  const getColorClass = (color) => {
    const colors = {
      'neon-blue': 'border-neon-blue/30 text-neon-blue',
      'neon-green': 'border-neon-green/30 text-neon-green',
      'neon-purple': 'border-neon-purple/30 text-neon-purple',
    }
    return colors[color] || colors['neon-blue']
  }

  const getBgGradient = (color) => {
    const gradients = {
      'neon-blue': 'bg-gradient-to-br from-neon-blue/10 via-neon-blue/5 to-transparent',
      'neon-green': 'bg-gradient-to-br from-neon-green/10 via-neon-green/5 to-transparent',
      'neon-purple': 'bg-gradient-to-br from-neon-purple/10 via-neon-purple/5 to-transparent',
    }
    return gradients[color] || gradients['neon-blue']
  }

  const getHoverGlow = (color) => {
    const glows = {
      'neon-blue': 'hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:border-neon-blue/60',
      'neon-green': 'hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] hover:border-neon-green/60',
      'neon-purple': 'hover:shadow-[0_0_25px_rgba(180,41,255,0.4)] hover:border-neon-purple/60',
    }
    return glows[color] || glows['neon-blue']
  }

  const getIconColor = (color) => {
    const colors = {
      'neon-blue': 'text-neon-blue',
      'neon-green': 'text-neon-green',
      'neon-purple': 'text-neon-purple',
    }
    return colors[color] || colors['neon-blue']
  }

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons['Code']
    return IconComponent
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
              className="glass rounded-xl p-6 hover:scale-105 transition-transform flex flex-col"
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
              <h3 className={`text-xl font-semibold mb-6 pb-3 border-b-2 ${getColorClass(category.color)}`}>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => {
                  const iconName = skillIcons[skill.name] || 'Code'
                  const IconComponent = getIconComponent(iconName)
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className={`group relative glass rounded-xl px-4 py-3 flex items-center gap-3 border ${getColorClass(category.color)} ${getBgGradient(category.color)} ${getHoverGlow(category.color)} transition-all duration-300 cursor-default overflow-hidden`}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        y: -4
                      }}
                    >
                      {/* Animated background glow on hover */}
                      <div className={`absolute inset-0 ${getBgGradient(category.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Icon */}
                      <div className={`relative z-10 ${getIconColor(category.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                      
                      {/* Skill name */}
                      <span className={`relative z-10 text-sm font-semibold ${textPrimaryClass} group-hover:tracking-wide transition-all duration-300`}>
                        {skill.name}
                      </span>
                      
                      {/* Pulsing border glow effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

