"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PORTFOLIO_DATA } from "@/data"

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="backdrop-blur-md bg-slate-900/40 border border-purple-400/30 rounded-2xl p-8 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 group-hover:text-purple-400 transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, itemIdx) => (
                  <motion.span
                    key={itemIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: idx * 0.1 + itemIdx * 0.05, duration: 0.4 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-slate-300 text-sm font-medium hover:bg-cyan-400/30 transition-all duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
