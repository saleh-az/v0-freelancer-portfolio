"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiMail, href: "mailto:hello@alexrivera.dev", label: "Email" },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-slate-900/40 border border-cyan-400/20 rounded-2xl p-8 mb-12 hover:border-cyan-400/60 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {submitted && (
            <motion.div
              className="mb-4 p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Thanks for your message! I'll get back to you soon.
            </motion.div>
          )}

          <div className="mb-6">
            <label className="block text-slate-300 font-semibold mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 font-semibold mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-200 hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-slate-400 mb-6">Or connect with me on:</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center bg-slate-900/60 border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-200"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
