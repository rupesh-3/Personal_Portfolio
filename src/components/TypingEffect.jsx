import { useState, useEffect, useRef } from 'react'

const TypingEffect = ({ text, speed = 100, deleteSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const timeoutRef = useRef(null)

  const roles = text.split(' → ')

  useEffect(() => {
    const currentRole = roles[currentIndex]
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Ensure we have a valid role
    if (!currentRole || currentRole.length === 0) {
      return
    }
    
    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentCharIndex < currentRole.length) {
          const newText = currentRole.substring(0, currentCharIndex + 1)
          setDisplayedText(newText)
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true)
          }, 2000)
        }
      } else {
        // Deleting phase
        if (currentCharIndex > 0) {
          const newText = currentRole.substring(0, currentCharIndex - 1)
          setDisplayedText(newText)
          setCurrentCharIndex(prev => prev - 1)
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          const nextIndex = (currentIndex + 1) % roles.length
          setCurrentIndex(nextIndex)
          setCurrentCharIndex(0)
          setDisplayedText('')
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentCharIndex, isDeleting, currentIndex, roles, speed, deleteSpeed])

  // Reset when role index changes
  useEffect(() => {
    setCurrentCharIndex(0)
    setDisplayedText('')
    setIsDeleting(false)
  }, [currentIndex])

  return (
    <span className="text-neon-blue font-code min-h-[1.5em] inline-block">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect

