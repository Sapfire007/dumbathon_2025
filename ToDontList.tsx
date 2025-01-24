"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChaosEffect } from "./chaos-effect"
import { DemotivatingRobot } from "./components/DemotivatingRobot"
import { EmojiWar } from "./components/EmojiWar"
import { ChangingElement } from "./components/ChangingElement"
import { EmotionBar } from "./components/EmotionBar"
import { ExplosionOverlay } from "./components/ExplosionOverlay"
import { useChaos } from "./hooks/useChaos"

export default function ToDontList() {
  const {
    tasks,
    inputValue,
    setInputValue,
    message,
    isAnimating,
    robotMessage,
    emotionLevel,
    isExploding,
    handleInput,
    removeTask,
    resetEmotion,
  } = useChaos()

  const [isBurning, setIsBurning] = useState(false)
  const [isRegenerating, setIsRegenerating] = useState(false)

  const [buttonText, setButtonText] = useState("Complete")
  const buttonTexts = ["Give Up", "Procrastinate", "Maybe Later", "Nah", "¯\\_(ツ)_/¯", "Meh", "Whatever", "Pass"]

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonText(buttonTexts[Math.floor(Math.random() * buttonTexts.length)])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const response = handleInput(inputValue)
      setInputValue("")
      alert(response)
    }
  }

  const handleBurn = () => {
    setIsBurning(true)
    setTimeout(() => {
      setIsBurning(false)
      setIsRegenerating(true)
      setTimeout(() => {
        setIsRegenerating(false)
      }, 3000)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 relative overflow-hidden">
      <EmojiWar onBurn={handleBurn} />
      <AnimatePresence>
        {!isBurning && (
          <motion.div
            initial={isRegenerating ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto relative z-40">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-bold">
                  <span className="text-purple-600">To-Don&apos;t</span> List
                </CardTitle>
                <ChangingElement />
                <EmotionBar level={emotionLevel} />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Please add [your task here]..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-center"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Hint: Type &quot;please add [task]&quot; to maybe add a task
                  </p>
                </div>

                <AnimatePresence>
                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center text-sm font-medium text-purple-600 p-2 rounded-md bg-purple-50"
                    >
                      {message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-2">
                  {tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="flex-1">{task.text}</span>
                      <Button variant="ghost" onClick={() => removeTask(task.id)} className="ml-2">
                        {buttonText}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {tasks.length === 0 && (
                  <p className="text-center text-muted-foreground">No tasks? Perfect! Keep up the procrastination!</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <ChaosEffect isAnimating={isAnimating} />
      <DemotivatingRobot message={robotMessage} />
      <ExplosionOverlay isVisible={isExploding} onReset={resetEmotion} />
    </div>
  )
}

