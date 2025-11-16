import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const AnimatedCounter = ({ end, start = 0, duration = 2, decimals = 0, suffix = '' }) => {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = start + (end - start) * easeOutQuart
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, end, start, duration])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

export default AnimatedCounter

