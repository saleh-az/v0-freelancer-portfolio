"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PORTFOLIO_DATA } from "@/data"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-slate-900/40 border border-cyan-400/20 rounded-2xl p-8"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">{PORTFOLIO_DATA.about.description}</p>
            <ul className="space-y-3">
              {PORTFOLIO_DATA.about.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <span className="text-cyan-400 text-xl">✦</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {[...Array(4)].map((_, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <p className="text-slate-300 font-semibold text-sm">Skill Category</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
