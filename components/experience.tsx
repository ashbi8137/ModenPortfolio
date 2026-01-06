"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/RevealOnScroll"

const experiences = [
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
      "Designed and implemented a React-based managerial dashboard module to provide secure login, consolidated reports, shop-level insights, and efficient management across multiple service locations.",
      "Improved system stability and usability by resolving frontend issues, refactoring components, enhancing UI design, and incorporating user feedback to streamline workflows and overall system interaction."
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6" ref={containerRef}>
        <RevealOnScroll className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Professional Journey</h2>
          <h3 className="section-title font-serif text-4xl md:text-5xl">Timeline of <span className="text-primary italic">Excellence</span></h3>
        </RevealOnScroll>

        <div className="relative mt-12 mx-auto max-w-5xl">
          {/* The Golden Path (Central Line) */}
          <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/30 transform md:-translate-x-1/2" />

          <motion.div
            className="absolute left-9 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary origin-top transform md:-translate-x-1/2"
            style={{ scaleY }}
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.company} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center ${isEven ? "" : "md:text-right"}`}>

      {/* Timeline Node (Golden Marker) */}
      <div className="absolute left-[34px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 z-10 md:top-8 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
      </div>

      {/* spacer for mobile layout alignment */}
      <div className={`md:hidden pl-20 ${isEven ? "" : ""}`}>
        {/* Mobile content wrapper is below */}
      </div>

      {/* Content Side */}
      <div className={`pl-20 md:pl-0 ${isEven ? "md:col-start-1 md:text-right" : "md:col-start-2 md:text-left"}`}>
        <RevealOnScroll delay={index * 0.1}>
          <div className={`relative group ${isEven ? "md:pr-8" : "md:pl-8"}`}>
            {/* Date Badge */}
            <div className={`mb-3 inline-block ${isEven ? "md:ml-auto" : "md:mr-auto"}`}>
              <span className="text-primary font-serif italic text-lg">{experience.period}</span>
            </div>

            <Card className="p-8 border border-white/10 bg-card/40 backdrop-blur-xl relative overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
              <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transition-all duration-700 ${isEven ? "right-0" : "left-0"}`} />

              <div className={`flex flex-col gap-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
                <div className="w-12 h-12 rounded-lg bg-white/5 p-2 border border-white/10 mb-2">
                  <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain" />
                </div>

                <div>
                  <h4 className="text-2xl font-serif font-bold text-foreground mb-1">{experience.role}</h4>
                  <p className="text-muted-foreground text-sm tracking-widest uppercase font-medium mb-4">{experience.company}</p>
                </div>
              </div>

              <ul className={`space-y-3 text-muted-foreground/80 leading-relaxed ${isEven ? "md:text-right" : "md:text-left"}`}>
                {experience.responsibilities.map((item: string, i: number) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </RevealOnScroll>
      </div>

      {/* Empty Side for Alternate Layout */}
      <div className={`hidden md:block ${isEven ? "md:col-start-2" : "md:col-start-1"}`} />
    </div>
  )
}
