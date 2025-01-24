import React from "react"
import { motion } from "framer-motion"

interface ChaosEffectProps {
  isAnimating: boolean
}

export function ChaosEffect({ isAnimating }: ChaosEffectProps) {
  if (!isAnimating) return null

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-6xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          🌀
        </motion.div>
      </div>
    </motion.div>
  )
}

