"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "TinkerHub",
    logo: "/Images/company/tinkerhub.jpg",
    role: "Program Facilitator",
    period: "2024 - Present",
    responsibilities: [
      "Leading technical workshops and community initiatives",
      "Mentoring students in technology and innovation",
    ],
  },
  {
    company: "SAIT",
    logo: "/Images/company/sait.png",
    role: "Event Lead",
    period: "2025 - Present",
    responsibilities: [
      "Event Planning and Coordination",
      "Collaborating with the team to develop creative and engaging events",
    ],
  },
  {
    company: "Voyance Edutech",
    logo: "/Images/company/voyance edutech.jpg",
    role: "Mathematics Tutor",
    period: "2023 - 2024",
    responsibilities: [
      "Provided comprehensive mathematics tutoring to engineering students",
      "Developed engaging teaching materials and practice problems",
      "Helped students improve their understanding and grades in technical mathematics",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <h2 className="section-title">Professional Journey</h2>

      <div className="mt-16 space-y-12 relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <TimelineItem key={exp.company} experience={exp} index={index} />
        ))}
      </div>
    </section>
  )
}

function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${isEven ? "md:text-right" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-10 w-5 h-5 rounded-full bg-card border-4 border-primary transform -translate-x-1/2 z-10"></div>

      {/* Content positioning */}
      <div className={`md:col-span-1 ${!isEven ? "md:col-start-2" : ""}`}>
        <Card className="p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-md overflow-hidden border border-border flex items-center justify-center bg-background p-1">
              <img
                src={experience.logo || "/placeholder.svg"}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <Badge variant="outline" className="mt-1 bg-primary/10 text-primary border-primary/20">
                {experience.role}
              </Badge>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>

          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {experience.responsibilities.map((item: string, i: number) => (
              <li key={i} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Empty column for layout */}
      <div className={`hidden md:block md:col-span-1 ${isEven ? "md:col-start-2" : ""}`}></div>
    </motion.div>
  )
}

