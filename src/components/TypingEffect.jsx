import { useState, useEffect } from 'react'

const TypingEffect = ({ text, speed = 100, deleteSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  const roles = text.split(' → ')

  useEffect(() => {
    const currentRole = roles[currentIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentRole.length) {
          setDisplayedText(currentRole.substring(0, currentCharIndex + 1))
          setCurrentCharIndex(currentCharIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setDisplayedText(currentRole.substring(0, currentCharIndex - 1))
          setCurrentCharIndex(currentCharIndex - 1)
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % roles.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [currentCharIndex, isDeleting, currentIndex, roles, speed, deleteSpeed])

  return (
    <span className="text-neon-blue font-code">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect

