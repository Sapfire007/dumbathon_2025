import React from "react"
import { motion } from "framer-motion"

interface DemotivatingRobotProps {
  message: string
}

export function DemotivatingRobot({ message }: DemotivatingRobotProps) {
  return (
    <motion.div
      className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <div className="flex items-center space-x-4">
        <span className="text-3xl">🤖</span>
        <p className="flex-1">{message}</p>
      </div>
    </motion.div>
  )
}

