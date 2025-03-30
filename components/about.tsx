"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import '@fortawesome/fontawesome-free/css/all.min.css';

const technologies = [
  { name: "React Native", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "Next.js", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Python", icon: "python" },
  { name: "CSS", icon: "css" },
  { name: "Supabase", icon: "database" },
  { name: "SQL", icon: "database" },
]

const skills = [
  "Event Management",
  "Leadership",
  "Hackathon Organization",
  "Community Building",
  "Problem Solving",
  "Team Collaboration",
]

export default function About() {
  return (
    <section id="about" className="relative">
      <h2 className="section-title">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-spin-slow"></div>
              <img
                src="/Profile.jpg"
                alt="Ashbin P A"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 gradient-text ">Ashbin P A</h3>
              <p className="text-muted-foreground mb-4 text-left">Tech Enthusiast & Community Builder</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Program Facilitator
                </Badge>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  Event Lead
                </Badge>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50">
            <p className="text-foreground leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
            Passionate tech enthusiast and community builder, driven by collaboration and innovation. 
            I thrive on organizing impactful events, fostering creativity, and solving real-world problems.
             Through hackathons, networking, and volunteering, I connect people and create spaces for growth
              and inclusivity in the tech ecosystem.
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-2 text-sm font-medium bg-card hover:bg-muted transition-colors border-b-2 border-primary/30"
                  >
                    <TechIcon name={tech.icon} className="mr-1.5 h-4 w-4 text-primary" />
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="outline" className="px-3 py-2 text-sm font-medium border-l-2 border-accent">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Tech icon component
function TechIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "react":
      return <i className={`fab fa-react ${className}`}></i>
    case "js":
      return <i className={`fab fa-js ${className}`}></i>
    case "python":
      return <i className={`fab fa-python ${className}`}></i>
    case "css":
      return <i className={`fab fa-css3-alt ${className}`}></i>
    case "database":
      return <i className={`fas fa-database ${className}`}></i>
    case "tailwind":
      return <i className={`fab fa-css3 ${className}`}></i>
    default:
      return <i className={`fas fa-code ${className}`}></i>
  }
}

