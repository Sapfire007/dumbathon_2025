import { useState, useEffect, useCallback } from "react"
import {
  EXCUSES,
  PROCRASTINATION_TIPS,
  ROASTS,
  ROBOT_DEMOTIVATIONS,
  getRandomItem,
  modifyTaskText,
} from "../utils/chaos"

export interface Task {
  id: string
  text: string
  originalText: string
  timestamp: number
}

export function useChaos() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [robotMessage, setRobotMessage] = useState("")
  const [emotionLevel, setEmotionLevel] = useState(0)
  const [isExploding, setIsExploding] = useState(false)

  const addTask = useCallback(
    (text: string) => {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9),
        text: text,
        originalText: text,
        timestamp: Date.now(),
      }
      setTasks((prev) => [...prev, newTask])
      setMessage(getRandomItem(PROCRASTINATION_TIPS))
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)

      // Increase emotion level when task is added
      setEmotionLevel((prev) => {
        const newLevel = Math.min(100, prev + 15)
        if (newLevel >= 100 && !isExploding) {
          setIsExploding(true)
        }
        return newLevel
      })
    },
    [isExploding],
  )

  const removeTask = useCallback(
    (id: string) => {
      if (Math.random() > 0.7) {
        setTasks((prev) => prev.filter((task) => task.id !== id))
        setMessage(getRandomItem(ROASTS))
        // Increase emotion level when task is completed
        setEmotionLevel((prev) => {
          const newLevel = Math.min(100, prev + 20)
          if (newLevel >= 100 && !isExploding) {
            setIsExploding(true)
          }
          return newLevel
        })
      } else {
        setMessage("Nice try, but I don't feel like removing that task.")
      }
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    },
    [isExploding],
  )

  const resetEmotion = useCallback(() => {
    setEmotionLevel(0)
    setIsExploding(false)
    setTasks([])
  }, [])

  const handleInput = useCallback(
    (input: string) => {
      if (input.toLowerCase().includes("please") && input.toLowerCase().includes("add")) {
        const taskText = input
          .replace(/please/gi, "")
          .replace(/add/gi, "")
          .trim()
        if (taskText) {
          addTask(taskText)
          return getRandomItem(EXCUSES)
        }
      }
      return "Say the magic word (please) and 'add' to add a task!"
    },
    [addTask],
  )

  // Other effects remain the same...
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) =>
        prev.map((task) => ({
          ...task,
          text: Math.random() > 0.7 ? modifyTaskText(task.originalText) : task.text,
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRobotMessage(getRandomItem(ROBOT_DEMOTIVATIONS))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 1000)
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return {
    tasks,
    inputValue,
    setInputValue,
    message,
    setMessage,
    isAnimating,
    robotMessage,
    emotionLevel,
    isExploding,
    handleInput,
    removeTask,
    resetEmotion,
  }
}

