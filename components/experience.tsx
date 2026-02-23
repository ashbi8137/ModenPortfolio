"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { ChevronRight } from "lucide-react"

const experiences = [
  {
    company: "Pay & Promise",
    logo: "/experience/pay-and-promise.png",
    role: "CO-FOUNDER",
    period: "Dec 2025 – Present",
    responsibilities: [
      "Building a social habit-staking platform with Google Cloud OAuth 2.0 and Supabase backend",
      "Designed camera-only verification with peer-consensus engine for proof-of-work validation",
      "Implementing UPI payment flows and preparing for Google Play Store launch",
    ],
  },
  {
    company: "SAIT-CUSAT",
    logo: "/experience/sait.png",
    role: "EVENT LEAD",
    period: "Jan 2024 - Present",
    responsibilities: [
      "Leading the planning, execution, and management of tech-focused student events",
      "Collaborating with cross-functional teams to deliver impactful and engaging programs",
      "Driving student participation through innovative outreach and communication strategies",
    ],
  },
  {
    company: "PETAERA Technologies",
    logo: "/experience/petaera.png",
    role: "REACT DEVELOPER INTERN",
    period: "July 2025 – August 2025",
    responsibilities: [
      "Designed a React-based managerial dashboard for secure multi-location management and analytics",
      "Enhanced system stability and UI/UX by resolving frontend issues and streamlining workflows",
    ],
  },
  {
    company: "Department of Automation Cell, IIT Palakkad",
    logo: "/experience/IIT_PKD_logo.jpg",
    role: "RESEARCH INTERN",
    period: "May 2025 – July 2025",
    responsibilities: [
      "Contributed to the ERP system used across IITs using Angular and Bootstrap",
      "Developed the FA Approval and Final Transcript components",
      "Collaborated with the team using shared utilities and iterative development cycles",
    ],
  },
  {
    company: "TINKERHUB-SOE",
    logo: "/experience/tinkerhub.jpg",
    role: "PROGRAM FACILITATOR",
    period: "Jan 2025 - July 2025",
    responsibilities: [
      "Leading technical workshops and community initiatives",
      "Mentoring students in technology and innovation",
    ],
  },
  {
    company: "VOYANCE EDUTECH",
    logo: "/experience/voyance edutech.jpg",
    role: "MATHEMATICS TUTOR",
    period: "Jan 2023 - Dec 2024",
    responsibilities: [
      "Provided comprehensive mathematics tutoring to engineering students",
      "Developed engaging teaching materials and practice problems",
      "Helped students improve their understanding and grades in technical mathematics",
    ],
  },
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealOnScroll className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Professional Journey</h2>
          <h3 className="section-title font-serif text-4xl md:text-5xl">Timeline of <span className="text-primary italic">Excellence</span></h3>
        </RevealOnScroll>

        {/* Interactive Accordion Stack */}
        <div className="max-w-5xl mx-auto space-y-3">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={exp.company} delay={index * 0.06}>
              <ExperienceRow
                experience={exp}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceRow({
  experience,
  index,
  isActive,
  onClick,
}: {
  experience: any
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${isActive
        ? "border-primary/40 bg-card/60 backdrop-blur-xl shadow-[0_0_40px_-12px_rgba(234,179,8,0.15)]"
        : "border-white/5 bg-card/20 backdrop-blur-sm hover:border-white/15 hover:bg-card/30"
        }`}
    >
      {/* Collapsed Row — Always Visible */}
      <div className="relative grid grid-cols-[2.5rem_3rem_1fr_1.5rem] md:grid-cols-[3rem_3.5rem_1fr_auto_1.5rem] items-center gap-3 md:gap-5 p-5 md:p-6">
        {/* Index Number */}
        <span className={`font-serif text-3xl md:text-4xl font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground/20"
          }`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Company Logo */}
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border transition-all duration-300 flex-shrink-0 ${isActive ? "border-primary/30 shadow-lg shadow-primary/10" : "border-white/10"
          }`}>
          <img
            src={experience.logo}
            alt={experience.company}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Role & Company */}
        <div className="flex-1 min-w-0">
          <h4 className={`text-lg md:text-xl font-bold font-serif transition-colors duration-300 truncate ${isActive ? "text-foreground" : "text-foreground/80"
            }`}>
            {experience.role}
          </h4>
          <p className="text-sm text-muted-foreground truncate">{experience.company}</p>
        </div>

        {/* Period */}
        <span className="hidden sm:block text-xs text-primary/70 font-medium tracking-wider uppercase whitespace-nowrap">
          {experience.period}
        </span>

        {/* Arrow */}
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground/40"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-0">
              {/* Gradient divider */}
              <div className="w-full h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent mb-5" />

              {/* Mobile period */}
              <div className="sm:hidden mb-4">
                <Badge variant="outline" className="border-primary/20 text-primary text-[10px] tracking-wider uppercase bg-primary/5">
                  {experience.period}
                </Badge>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 ml-0 md:ml-[calc(2rem+3.5rem+1.5rem)]">
                {experience.responsibilities.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.15, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
