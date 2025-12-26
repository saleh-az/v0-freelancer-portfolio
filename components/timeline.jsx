"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PORTFOLIO_DATA } from "@/data"

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-8"
            >
              <motion.div
                className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full -translate-x-1.5"
                animate={inView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />

              {idx !== PORTFOLIO_DATA.experience.length - 1 && (
                <div className="absolute left-1.5 top-4 w-0.5 h-24 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
              )}

              <div className="backdrop-blur-md bg-slate-900/40 border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                  <span className="text-slate-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-purple-400 font-semibold mb-3">{exp.company}</p>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
