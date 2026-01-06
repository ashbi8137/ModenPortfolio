"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Send, Github, Linkedin, Code } from "lucide-react"
import { motion } from "framer-motion"

const roles = [
  "Program Facilitator",
  "Event Lead",
  "Tech Innovator",
  "Community Builder",
  "Android Developer",
  "Front-end Developer",
]

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        setTypingSpeed(100)

        // If completed typing
        if (displayText.length === currentRole.length) {
          setTypingSpeed(2000) // Pause before deleting
          setIsDeleting(true)
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        setTypingSpeed(50)

        // If completed deleting
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
          setTypingSpeed(500) // Pause before typing next role
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, roleIndex, isDeleting, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="container max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-medium backdrop-blur-sm">
              Designing the Future
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold font-serif mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="text-foreground">Ashbin</span> <span className="text-primary italic">P A</span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            className="h-8 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              I am a <span className="font-normal text-foreground">{displayText}</span>
              <span className="inline-block w-[1px] h-5 ml-1 bg-primary animate-pulse"></span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Crafting premium digital experiences and building communities through innovative tech events and hackathons.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href="/Resume_Jan.pdf" download="Resume_Jan.pdf">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full sm:w-auto group" asChild>
              <a href="#contact">
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Let's Connect
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="https://github.com/ashbi8137"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/ashbin-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://devfolio.co/@Ashbin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Devfolio"
            >
              <Code className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}

