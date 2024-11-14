'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Component() {
  const [response, setResponse] = useState<'pending' | 'yes' | 'no'>('pending')
  const [showNotification, setShowNotification] = useState(false)

  const handleYes = () => {
    setResponse('yes')
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    sendNotification()
  }

  const handleNo = () => {
    setResponse('no')
  }

  const sendNotification = () => {
    // This is a placeholder function. In a real application, you would implement
    // a server-side notification system (e.g., using WebSockets or server-sent events)
    console.log("She clicked Yes! Notification sent.")
    setShowNotification(true)
  }

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-WmWBqU42Bla9o4wFaD5AoFxj3Y4hwy.jpeg')`,
        backgroundColor: 'rgba(0,0,0,0.3)',
        backgroundBlendMode: 'overlay',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {response === 'pending' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-sm bg-white/20 p-8 rounded-2xl text-center space-y-6 max-w-md w-full"
        >
          <h1 className="text-4xl font-bold text-white">I love you</h1>
          <p className="text-2xl text-white">Will you be my Bandi?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleYes}
              className="px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              No
            </button>
          </div>
        </motion.div>
      )}
      {response === 'yes' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-sm bg-white/20 p-8 rounded-2xl text-center max-w-md w-full"
        >
          <h1 className="text-4xl font-bold text-white mb-4">💖 She said YES! 💖</h1>
          <p className="text-xl text-white">Forever together!</p>
        </motion.div>
      )}
      {response === 'no' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-sm bg-white/20 p-8 rounded-2xl text-center space-y-6 max-w-md w-full"
        >
          <h1 className="text-4xl font-bold text-white">I love you</h1>
          <p className="text-2xl text-white">Will you be my Bandi?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleYes}
              className="px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Yes
            </button>
          </div>
        </motion.div>
      )}
      {showNotification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
          She clicked Yes! 🎉
        </div>
      )}
    </div>
  )
        }
