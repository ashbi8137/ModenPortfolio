"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import '@fortawesome/fontawesome-free/css/all.min.css';

const technologies = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Angular", icon: "angular" },
  { name: "React Native", icon: "react" },
  { name: "Next.js", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "CSS", icon: "css" },
  { name: "C++", icon: "c++" },
  { name: "Python", icon: "python" },
  { name: "SQL", icon: "database" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Supabase", icon: "database" },
  { name: "Docker", icon: "docker" },
]

const skills = [
  "Event Management",
  "Leadership",
  "Hackathon Organization",
  "Community Building",
  "Problem Solving",
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image Area */}
          <div className="relative group">
            <RevealOnScroll>
              <div className="relative z-10">
                {/* Main Image Frame */}
                <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img
                    src="/Profile_new.jpg"
                    alt="Ashbin P A"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                      <p className="text-white text-sm font-medium">Available for</p>
                      <p className="text-primary font-bold">New Opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements around Image */}
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <RevealOnScroll delay={0.2}>
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                  Crafting Digital <span className="text-primary italic">Excellence</span> & <br />
                  Building Communities.
                </h3>
                <div className="w-20 h-1 bg-primary rounded-full mb-8" />

                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                  I am a passionate tech enthusiast driven by collaboration and innovation.
                  My journey is defined by organizing impactful events, fostering creativity,
                  and solving real-world problems through technology.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Whether it's developing seamless applications or leading a community of developers,
                  I strive to create spaces for growth and inclusivity in the tech ecosystem.
                </p>
              </div>
            </RevealOnScroll>

            {/* Micro-interaction Grid for Stats/Skills */}
            <RevealOnScroll delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {/* Tech Stack Mini-Grid */}
                <div className="col-span-2 md:col-span-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                    <i className="fas fa-code text-primary text-sm" />
                    Technical Arsenal
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                      <Badge key={tech.name} variant="outline" className="border-primary/20 hover:bg-primary/10 transition-colors">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="col-span-2 md:col-span-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                    <i className="fas fa-users text-primary text-sm" />
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {skills.map(skill => (
                      <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  )
}
