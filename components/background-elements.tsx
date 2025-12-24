"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    size: Math.random() * 2 + 1, // 1px to 3px
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Base Grain Layer (Texture) */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Gold Dust Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-primary/40 shadow-[0_0_8px_currentColor] ${i > 8 ? "hidden md:block" : ""
            }`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3. Midnight Aurora Gradients (Refined for Luxury) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[30%] -right-[10%] w-[300px] h-[300px] md:w-[1000px] md:h-[1000px] rounded-full bg-primary/10 blur-[80px] md:blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -left-[20%] w-[250px] h-[250px] md:w-[800px] md:h-[800px] rounded-full bg-accent/5 blur-[60px] md:blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] right-[20%] w-[300px] h-[300px] md:w-[900px] md:h-[900px] rounded-full bg-primary/5 blur-[70px] md:blur-[140px]"
      />

      {/* 4. Vignette (Focus on Center) */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/90" />
    </div>
  )
}
