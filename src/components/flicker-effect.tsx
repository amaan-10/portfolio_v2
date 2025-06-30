"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const FlickerEffect = () => {
  const [isFlickering, setIsFlickering] = useState(false)

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsFlickering(true)
        setTimeout(() => setIsFlickering(false), 100)
      }
    }, 100)

    return () => clearInterval(flickerInterval)
  }, [])

  if (!isFlickering) return null

  return (
    <motion.div
      className="fixed inset-0 bg-white pointer-events-none z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0, 0.1, 0] }}
      transition={{ duration: 0.1 }}
    />
  )
}

export default FlickerEffect
