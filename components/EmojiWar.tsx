import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const emojis = [
  "😀",
  "😂",
  "🤣",
  "😅",
  "😊",
  "😎",
  "🤩",
  "😜",
  "🤪",
  "😇",
  "🥳",
  "🤯",
  "🤬",
  "😱",
  "🙄",
  "🤢",
  "🤮",
  "🥴",
  "🤡",
  "👻",
  "💀",
  "👽",
  "🤖",
  "💩",
  "🦄",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🦟",
  "🦗",
  "🕷",
  "🕸",
  "🦂",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🐘",
  "🦛",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🐃",
  "🐂",
  "🐄",
  "🐎",
  "🐖",
  "🐏",
  "🐑",
  "🦙",
  "🐐",
  "🦌",
  "🐕",
  "🐩",
  "🦮",
  "🐕‍🦺",
  "🐈",
  "🐈‍⬛",
  "🐓",
  "🦃",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🕊",
  "🐇",
  "🦝",
  "🦨",
  "🦡",
  "🦦",
  "🦥",
  "🐁",
  "🐀",
  "🐿",
  "🦔",
  "🐾",
  "🐉",
  "🐲",
  "🌵",
  "🎄",
  "🌲",
  "🌳",
  "🌴",
  "🌱",
  "🌿",
  "☘️",
  "🍀",
  "🎍",
  "🎋",
  "🍃",
  "🍂",
  "🍁",
  "🍄",
  "🌾",
  "💐",
  "🌷",
  "🌹",
  "🥀",
  "🌺",
  "🌸",
  "🌼",
  "🌻",
  "🌞",
  "🌝",
  "🌛",
  "🌜",
  "🌚",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌙",
  "🌎",
  "🌍",
  "🌏",
  "🪐",
  "💫",
  "⭐️",
  "🌟",
  "✨",
  "⚡️",
  "☄️",
  "💥",
  "🔥",
  "🌪",
  "🌈",
  "☀️",
  "🌤",
  "⛅️",
  "🌥",
  "☁️",
  "🌦",
  "🌧",
  "⛈",
  "🌩",
  "🌨",
  "❄️",
  "☃️",
  "⛄️",
  "🌬",
  "💨",
  "💧",
  "💦",
  "☔️",
  "☂️",
  "🌊",
  "🌫",
]

interface EmojiProps {
  emoji: string
  x: number
  y: number
  isBurning: boolean
}

const Emoji: React.FC<EmojiProps> = ({ emoji, x, y, isBurning }) => {
  return (
    <motion.div
      className="absolute text-4xl"
      initial={{ x, y }}
      animate={{
        x: x + (Math.random() - 0.5) * 100,
        y: y + (Math.random() - 0.5) * 100,
        opacity: isBurning ? 0 : 1,
      }}
      transition={{
        x: { type: "spring", stiffness: 50, damping: 0 },
        y: { type: "spring", stiffness: 50, damping: 0 },
        opacity: { duration: 0.5 },
      }}
    >
      {isBurning ? "🔥" : emoji}
    </motion.div>
  )
}

export const EmojiWar: React.FC<{ onBurn: () => void }> = ({ onBurn }) => {
  const [emojiList, setEmojiList] = useState<EmojiProps[]>([])
  const [isBurning, setIsBurning] = useState(false)

  const addEmoji = useCallback(() => {
    if (emojiList.length < 50) {
      setEmojiList((prev) => [
        ...prev,
        {
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          isBurning: false,
        },
      ])
    } else if (!isBurning) {
      setIsBurning(true)
      onBurn()
      setTimeout(() => {
        setEmojiList([])
        setIsBurning(false)
      }, 3000)
    }
  }, [emojiList.length, isBurning, onBurn])

  useEffect(() => {
    const interval = setInterval(addEmoji, 500)
    return () => clearInterval(interval)
  }, [addEmoji])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {emojiList.map((emojiProps, index) => (
          <Emoji key={index} {...emojiProps} isBurning={isBurning} />
        ))}
      </AnimatePresence>
    </div>
  )
}

