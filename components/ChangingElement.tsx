import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const phrases = [
  "Where productivity comes to die 🤧",
  "Procrastination station 🚉",
  "Task avoidance central 😌",
  "Embracing laziness since forever 🤞",
  "Why do today what you can put off until tomorrow? 💅",
  "Professional time-wasters anonymous 🗿",
  "Turning 'To-Do' into 'To-Don't' since 2006 😴",
  "Experts in task postponement 💯",
  "Where deadlines fear to tread 🥶",
  "Cultivating excuses, not results ✅",
]

export const ChangingElement: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0])
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1)
      setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-muted-foreground"
        >
          {currentPhrase}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

