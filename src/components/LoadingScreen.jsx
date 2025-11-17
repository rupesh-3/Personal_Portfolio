import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const LoadingScreen = () => {
  const { theme } = useTheme()
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-20 mx-auto border-4 border-neon-blue border-t-transparent rounded-full"></div>
        </motion.div>
        
        <motion.h2
          className="text-2xl font-heading font-bold gradient-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing Portfolio...
        </motion.h2>
        
        <motion.p
          className="text-text-secondary mt-4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          Loading S Rupesh's digital presence
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen

