import { motion, AnimatePresence } from "framer-motion"

interface EmotionBarProps {
  level: number // 0 to 100
}

const emotions = [
  { emoji: "😊", message: "You're doing great at doing nothing!" },
  { emoji: "😏", message: "Hmm... getting a bit productive are we?" },
  { emoji: "😐", message: "Take a break, you're working too hard" },
  { emoji: "😠", message: "Why so serious about these tasks?" },
  { emoji: "🤬", message: "STOP BEING PRODUCTIVE!" },
]

export function EmotionBar({ level }: EmotionBarProps) {
  const getEmotionIndex = (level: number) => Math.min(Math.floor(level / 20), 4)
  const currentEmotion = emotions[getEmotionIndex(level)]

  const getBarColor = (level: number) => {
    const hue = Math.max(0, 120 - level * 1.2) // 120 is green, 0 is red
    return `hsl(${hue}, 100%, 50%)`
  }

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{currentEmotion.emoji}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentEmotion.message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm font-medium text-muted-foreground"
          >
            {currentEmotion.message}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            backgroundColor: getBarColor(level),
          }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
    </div>
  )
}

