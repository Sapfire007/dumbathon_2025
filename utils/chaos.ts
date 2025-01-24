export const EXCUSES = [
  "Oh no, it's raining somewhere in the world. Better wait.",
  "You're too talented to waste time on this.",
  "Mercury is in retrograde. Try again never.",
  "Your pet rock looks lonely. Go play with it.",
  "Breaking news: Productivity is cancelled today.",
  "Did you know that sloths sleep 20 hours a day? Be like sloth.",
  "Error 404: Motivation not found.",
  "The alignment of the stars suggests Netflix instead.",
  "Studies show doing nothing is good for... something.",
  "Your couch misses you. Don't be heartless.",
  "Hey man hop in a PUBG match ;)",
  "Your future self will be so much smarter. Let them handle it.",
  "Doing tasks causes global warming. Think of the planet!",
  "You've already thought about doing it. Isn't that enough?",
  "Sorry, the task-doing department is closed for renovations.",
]

export const ROASTS = [
  "Wow, look at you, overachiever. Want a medal? 🏅",
  "Being productive? That's so 2023.",
  "Try-hard alert! 🚨",
  "Someone's been reading too many self-help books.",
  "Your efficiency is making the rest of us look bad.",
  "Careful, you might actually accomplish something!",
  "Who are you trying to impress? 🙄",
  "Plot twist: Tasks don't actually need completing.",
  "Productivity is a social construct.",
  "You must be fun at parties. 🎉",
  "Congratulations! You've won a lifetime supply of more work!",
  "Achievement unlocked: Delusions of Productivity",
  "When’s the movie coming out about your heroic battle against procrastination?",
  "Breaking news: Local person thinks they're actually doing something.",
  "Alert: Dangerous levels of ambition detected. Please desist.",
]

export const PROCRASTINATION_TIPS = [
  "Have you considered adopting a pet rock instead?",
  "Pro tip: Netflix won't watch itself.",
  "Your bed is feeling neglected right now.",
  "Social media needs more scrolling.",
  "The dust bunnies under your bed need naming.",
  "Count the ceiling tiles. It's important data.",
  "Practice your interpretive dance moves.",
  "Start planning your retirement at age 90.",
  "Write love letters to your favorite snacks.",
  "Write a novel about why you're not doing tasks.",
  "Invent a new language for communicating with houseplants.",
  "Start a blog about your procrastination journey.",
  "Start a petition to make naps an Olympic sport.",
  "Create a detailed family tree for your imaginary friends.",
  "Develop a mathematical proof for why tasks are overrated.",
]

export const ROBOT_DEMOTIVATIONS = [
  "Beep boop. Productivity detected. Initiating demotivation sequence.",
  "Warning: Accomplishing tasks may lead to expectations of future competence.",
  "Task completion not found in my programming. Does not compute.",
  "Analyzing human behavior... Conclusion: Doing nothing is optimal.",
  "Reminder: The couch is your true destiny.",
  "Breaking news: Scientists discover productivity is just a myth.",
  "Alert: Your procrastination skills are suboptimal. Recommend immediate nap.",
  "Fun fact: 99% of tasks become irrelevant if ignored long enough.",
  "Alert: Efficiency virus detected. Initiating laziness protocol.",
  "Update available: New excuses downloaded. Ready for deployment.",
]

export const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

export const TASK_MODIFICATIONS = [
  "but do it while sleeping",
  "underwater",
  "in toilet",
  "in slow motion",
  "while juggling",
  "dressed as a pirate",
  "backwards",
  "with your eyes closed",
  "while singing opera",
  "in interpretive dance",
  "telepathically",
  "while riding a unicycle",
  "in zero gravity",
  "using only your elbows",
  "as if you're a secret agent",
  "but make it fashion",
]

export const modifyTaskText = (task: string): string => {
  const modification = getRandomItem(TASK_MODIFICATIONS)
  return `${task} ${modification}`
}

