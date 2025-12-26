"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PORTFOLIO_DATA } from "@/data"
import { FiExternalLink, FiGithub } from "react-icons/fi"

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="backdrop-blur-md bg-slate-900/40 border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 hover:bg-purple-500/30 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-200"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
