import { motion } from "framer-motion"

interface ExplosionOverlayProps {
  isVisible: boolean
  onReset: () => void
}

export function ExplosionOverlay({ isVisible, onReset }: ExplosionOverlayProps) {
  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full mx-auto p-4 text-center">
        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/explosion-mushroom-cloud-3Mp6S7vuOQBRg2faiHVkyOSrwMYKAy.gif"
            alt="Nuclear explosion"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h2
          className="text-4xl font-bold text-red-500 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          PRODUCTIVITY OVERLOAD! 😡
        </motion.h2>
        <motion.p
          className="text-xl text-red-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          You weren&apos;t really meant to complete your tasks!
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
          onClick={onReset}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Reset and Embrace Laziness
        </motion.button>
      </div>
    </motion.div>
  )
}

