import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects } from '../data/portfolioData'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      className="glass rounded-xl overflow-hidden group cursor-pointer flex-shrink-0 w-80 md:w-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, z: 50 }}
    >
      {/* Project Image/Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold gradient-text opacity-30">
            {project.title.charAt(0)}
          </span>
        </div>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-dark-bg/90 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:border-neon-green transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} className="text-neon-green" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:border-neon-blue transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={24} className="text-neon-blue" />
              </motion.a>
            )}
          </motion.div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
          <span className="text-xs glass px-2 py-1 rounded-full text-text-secondary">
            {project.category}
          </span>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs glass px-2 py-1 rounded text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs glass px-2 py-1 rounded text-text-secondary">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Results/Metrics */}
        {project.results && (
          <div className="text-sm text-neon-green font-semibold mb-2">
            {project.results}
          </div>
        )}

        {project.metrics && (
          <div className="text-xs text-text-secondary">
            {project.metrics}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const ProjectCarousel = ({ title, projectList, color = 'neon-blue' }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 400
    const newPosition = direction === 'left' 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
    setScrollPosition(newPosition)
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft)
    }
  }

  const getColorClasses = () => {
    const colors = {
      'neon-blue': 'border-neon-blue text-neon-blue hover:neon-blue-glow',
      'neon-green': 'border-neon-green text-neon-green hover:neon-green-glow',
      'neon-purple': 'border-neon-purple text-neon-purple hover:neon-purple-glow',
    }
    return colors[color] || colors['neon-blue']
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-bold gradient-text">
          {title}
        </h3>
        <div className="flex gap-2">
          <motion.button
            onClick={() => scroll('left')}
            className={`p-2 glass rounded-lg border ${getColorClasses()}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={scrollPosition === 0}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            className={`p-2 glass rounded-lg border ${getColorClasses()}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {projectList.map((project, index) => (
            <div key={project.id} style={{ scrollSnapAlign: 'start' }}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectsShowcase = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects Showcase
        </motion.h2>

        <ProjectCarousel 
          title="Featured Projects" 
          projectList={projects.featured} 
          color="neon-blue"
        />
        
        <ProjectCarousel 
          title="IoT & Embedded Systems" 
          projectList={projects.iot} 
          color="neon-green"
        />
        
        <ProjectCarousel 
          title="AI/ML Projects" 
          projectList={projects.aiMl} 
          color="neon-purple"
        />
        
        <ProjectCarousel 
          title="Data Analytics" 
          projectList={projects.dataAnalytics} 
          color="neon-blue"
        />
      </div>
    </section>
  )
}

export default ProjectsShowcase

