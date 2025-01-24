import { motion } from "framer-motion"

export const Circle = ({ color }: { color: string }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      backgroundColor: color,
      width: "100px",
      height: "100px",
    }}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Number.POSITIVE_INFINITY,
    }}
  />
)

export const Square = ({ color }: { color: string }) => (
  <motion.div
    className="absolute"
    style={{
      backgroundColor: color,
      width: "80px",
      height: "80px",
    }}
    animate={{
      rotate: [0, 90, 180, 270, 360],
      borderRadius: ["0%", "25%", "50%", "25%", "0%"],
    }}
    transition={{
      duration: 8,
      ease: "linear",
      times: [0, 0.25, 0.5, 0.75, 1],
      repeat: Number.POSITIVE_INFINITY,
    }}
  />
)

export const Triangle = ({ color }: { color: string }) => (
  <motion.div
    className="absolute"
    style={{
      width: 0,
      height: 0,
      borderLeft: "40px solid transparent",
      borderRight: "40px solid transparent",
      borderBottom: `80px solid ${color}`,
    }}
    animate={{
      rotate: [0, 120, 240, 360],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      times: [0, 0.33, 0.66, 1],
      repeat: Number.POSITIVE_INFINITY,
    }}
  />
)

