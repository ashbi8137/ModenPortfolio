"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Ar.Shamil P A Portfolio",
    tags: ["Next.js", "Portfolio"],
    description: "Freelance architectural portfolio showcasing timeless and sustainable designs.",
    liveUrl: "https://ashbi8137.github.io/Architectural-portfolio/",
    githubUrl: "https://github.com/ashbi8137/Architectural-portfolio",
    preview: "/projects/architectural-portfolio.png",
    featured: true,
  },
  {
    id: 2,
    title: "ResQ",
    tags: ["Mobile App", "React Native"],
    description: "Emergency assistance and rescue coordination app.",
    liveUrl: "https://github.com/ashbi8137/ResQ/",
    githubUrl: "https://github.com/ashbi8137/ResQ/",
    preview: "/projects/resq.jpg",
  },
  {
    id: 3,
    title: "CareerBridge",
    tags: ["AI", "Web App"],
    description: "AI-powered internship and placement portal connecting students with recruiters.",
    liveUrl: "https://github.com/ashbi8137/careerbridge",
    githubUrl: "https://github.com/ashbi8137/careerbridge",
    inProgress: true,
    preview: "/projects/careerbridge.png",
    featured: true,
  },
  {
    id: 4,
    title: "Sentinel Shield",
    tags: ["Security", "AI"],
    description: "Automated passport verification using facial recognition.",
    liveUrl: "https://devfolio.co/projects/sentinel-shield-2e2f",
    githubUrl: "https://github.com/ashbi8137/Sentinel-Shield",
    preview: "/projects/sentinalshield.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Vibhava Memoirs",
    tags: ["UI", "Next.js"],
    description: "Interactive analytics interface for Vibhava Innovation Summit.",
    liveUrl: "https://vibhava-memoirs.vercel.app/",
    githubUrl: "https://github.com/ashbi8137/vibhava-wrapped",
    preview: "/projects/vibhava-wrapped.png",
  },
  {
    id: 6,
    title: "ClaimIt",
    tags: ["Mobile App", "React Native"],
    description: "Lost item tracking and recovery system. Active development.",
    liveUrl: "https://github.com/ashbi8137/claimit",
    githubUrl: "https://github.com/ashbi8137/claimit",
    inProgress: true,
    preview: "/projects/claimit.jpg",
  },
  {
    id: 7,
    title: "Ninte-കഥ",
    tags: ["Web App", "Next.js"],
    description: "Turn search history into a personalized story.",
    liveUrl: "https://ninte-kadha-front.vercel.app/",
    githubUrl: "https://github.com/ashbi8137/ninte-kadha-Front",
    preview: "/projects/ente-kadha.png",
  },
  {
    id: 8,
    title: "AnonReport",
    tags: ["Blockchain"],
    description: "Anonymous crime reporting system on blockchain. EMERGE-X winner.",
    liveUrl: "https://devfolio.co/projects/anonreport-2e2f",
    githubUrl: "https://github.com/ashbi8137/ACRS",
    preview: "/projects/anonreport.png",
  },
  {
    id: 9,
    title: "ICMBGSD2025",
    tags: ["UI/UX", "CSS"],
    description: "Landing page for Marine Biodiversity Conference.",
    liveUrl: "https://icmbgsd-landing.vercel.app/",
    githubUrl: "https://github.com/ashbi8137/ICMBGSD_Landing",
    preview: "/projects/icmbgsd.png",
  },
  {
    id: 10,
    title: "EcoCommute",
    tags: ["Sustainability", "Transportation"],
    description: "Sustainable transportation solution with carbon footprint tracking.",
    liveUrl: "https://devfolio.co/projects/ecocommute-d00c",
    githubUrl: "https://github.com/ashbi8137/EcoCommute-Final",
    preview: "/projects/ecocommute.png",
  },
  {
    id: 11,
    title: "OurRupee",
    tags: ["Blockchain", "FinTech"],
    description: "Blockchain-based financial platform for secure digital transactions.",
    liveUrl: "https://devpost.com/software/our-rupee",
    githubUrl: "https://github.com/ashbi8137/OurRupee",
    preview: "/projects/ourrupee.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealOnScroll className="w-full text-center mb-16" width="100%">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Portfolio</h2>
          <h3 className="section-title font-serif text-4xl md:text-5xl">Selected <span className="text-primary italic">Works</span></h3>
        </RevealOnScroll>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] grid-flow-dense">
          {projects.map((project, index) => (
            <BentoCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BentoCard({ project, index }: { project: any; index: number }) {
  const isFeatured = project.featured;
  const isMobile = project.tags.includes("Mobile App");

  return (
    <RevealOnScroll delay={index * 0.1} width="100%" className={cn(
      "group relative overflow-hidden rounded-3xl border border-border/40 bg-card/20 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:shadow-2xl",
      isFeatured ? "md:col-span-2 md:row-span-1" : isMobile ? "md:col-span-1 md:row-span-2" : "md:col-span-1"
    )}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.preview || "/placeholder-project.png"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="bg-background/40 backdrop-blur-md text-foreground border-border/20 text-xs shadow-none">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 h-0 group-hover:h-auto">
          {project.description}
        </p>

        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
          </Button>
          <Button size="sm" variant="outline" className="bg-transparent border-border/20 text-foreground hover:bg-background/10" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
          </Button>
        </div>
      </div>
    </RevealOnScroll>
  )
}
