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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm inline-flex items-center">
              <span className="mr-2">👋</span> Hey, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="gradient-text">Ashbin</span> <span className="text-foreground">P A</span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            className="h-10 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-xl md:text-2xl text-muted-foreground font-medium">
              {displayText}
              <span className="inline-block w-1 h-6 ml-1 bg-accent animate-pulse"></span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 italic font-montserrat relative px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="absolute left-0 top-0 text-4xl text-accent opacity-50">"</span>
            Crafting digital experiences and building communities through innovative tech events and hackathons.
            <span className="absolute right-0 bottom-0 text-4xl text-accent opacity-50">"</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href="/RESUME.pdf" download="RESUME.pdf">
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

