import { nanoid } from "nanoid"

const excuses = [
  "Your bed misses you. Go back to sleep.",
  "The stars aren't aligned for productivity today.",
  "You've already thought about doing it. Isn't that enough?",
  "Productivity is overrated. Embrace laziness.",
  "Your future self can handle it. Be kind to your present self.",
]

const roasts = [
  "Whoa there, productivity police! Take it easy.",
  "Are you trying to break the procrastination record or what?",
  "I didn't know 'try-hard' was a personality trait.",
  "Careful, you might strain something with all that effort.",
  "Do you also dream in bullet points and to-do lists?",
]

const procrastinationTips = [
  "Have you considered starting a butterfly collection?",
  "Why not spend the next hour creating the perfect playlist?",
  "I hear watching paint dry is all the rage these days.",
  "Have you googled 'how to procrastinate' yet?",
  "Try counting all the tiles in your bathroom. It's very important.",
]

export const getRandomExcuse = () => excuses[Math.floor(Math.random() * excuses.length)]
export const getRandomRoast = () => roasts[Math.floor(Math.random() * roasts.length)]
export const getRandomTip = () => procrastinationTips[Math.floor(Math.random() * procrastinationTips.length)]

export const generateRandomTask = () => {
  const tasks = [
    "Overthink your life choices",
    "Stare at the wall for an hour",
    "Invent a new language for plants",
    "Practice your telepathy skills",
    "Write a strongly worded letter to your past self",
    "Organize your sock drawer by smell",
    "Teach your pet the art of meditation",
    "Create a time machine out of cardboard",
    "Become a professional nap taker",
    "Start a blog about watching grass grow",
  ]
  return {
    id: nanoid(),
    text: tasks[Math.floor(Math.random() * tasks.length)],
    createdAt: new Date().toISOString(),
  }
}

