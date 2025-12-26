"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PORTFOLIO_DATA } from "@/data"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {PORTFOLIO_DATA.name}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {PORTFOLIO_DATA.title}
        </motion.p>

        <motion.p
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {PORTFOLIO_DATA.bio}
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-200 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
