"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY }

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("button")) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-200 ${
        isHovering ? "scale-150" : "scale-100"
      }`}
    >
      <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
    </div>
  )
}
