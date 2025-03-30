"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "CareerBridge",
    tags: ["AI", "Web App"],
    description: "An innovative internship and placement portal connecting students with recruiters, streamlining the recruitment process through AI-powered matching.",
    liveUrl: "https://github.com/ashbi8137/careerbridge",
    githubUrl: "https://github.com/ashbi8137/careerbridge",
    inProgress: true,
    preview: "/projects/careerbridge.png",
  },
  {
    id: 2,
    title: "Vibhava Memoirs",
    tags: ["UI", "Next.js", "Tailwind CSS"],
    description: "An interface to use industrial expert to analyze their project interactions on Vibhava Innovation Summit.",
    liveUrl: "https://vibhava-memoirs.vercel.app/",
    githubUrl: "https://github.com/ashbi8137/vibhava-wrapped",
    preview: "/projects/vibhava-wrapped.png",
  },
  {
    id: 3,
    title: "ClaimIt",
    tags: ["Mobile App", "React Native"],
    description: "ClaimIt users can track and recover lost items efficiently. Currently in active development.",
    liveUrl: "https://github.com/ashbi8137/claimit",
    githubUrl: "https://github.com/ashbi8137/claimit",
    inProgress: true,
    preview: "/projects/claimit.jpg",
  },
  {
    id: 4,
    title: "Ninte-കഥ",
    tags: ["Web App", "Next.js", "Tailwind CSS"],
    description: "Transform your search history into a beautiful personal story",
    liveUrl: "https://ninte-kadha-front.vercel.app/",
    githubUrl: "https://github.com/ashbi8137/ninte-kadha-Front",
    preview: "/projects/ente-kadha.png",
  },
  {
    id: 5,
    title: "ICMBGSD2025 website",
    tags: ["UI / UX", "CSS", "JS"],
    description: "The International Conference on Marine Biodiversity, Genomics, and Sustainable Development",
    liveUrl: "https://icmbgsd-landing.vercel.app/",
    githubUrl: "https://github.com/ashbi8137/ICMBGSD_Landing",
    preview: "/projects/icmbgsd.png",
  },
  {
    id: 6,
    title: "Sentinel Shield",
    tags: ["Security", "AI"],
    description:
      "An automated passport verification system using facial recognition technology to enhance security and streamline identity verification processes.",
    liveUrl: "https://devfolio.co/projects/sentinel-shield-2e2f",
    githubUrl: "https://github.com/ashbi8137/Sentinel-Shield",
    preview: "/projects/sentinalshield.jpg",
  },
  {
    id: 7,
    title: "EcoCommute",
    tags: ["Sustainability", "Transportation"],
    description:
      "A sustainable transportation solution designed to reduce environmental impact through smart commuting options and carbon footprint tracking.",
    liveUrl: "https://devfolio.co/projects/ecocommute-d00c",
    githubUrl: "https://github.com/ashbi8137/EcoCommute-Final",
  },
  {
    id: 8,
    title: "AnonReport",
    tags: ["Blockchain"],
    description:
      "An anonymous crime reporting system powered by blockchain technology that rewards verified crime reports. Presented at EMERGE-X INNOVATIVE Buildathon.",
    liveUrl: "https://devfolio.co/projects/anonreport-2e2f",
    githubUrl: "https://github.com/ashbi8137/ACRS",
    preview: "/projects/anonreport.png",
  },
  {
    id: 9,
    title: "OurRupee",
    tags: ["Blockchain", "FinTech"],
    description: "A blockchain-based financial platform revolutionizing digital transactions and financial management.",
    liveUrl: "https://devfolio.co/projects/ourrupee-2e2f",
    githubUrl: "https://github.com/ashbi8137/OurRupee",
  },
  {
    id: 10,
    title: "Next_word",
    tags: ["RNN", "Python"],
    description: "A RNN based model to predict the next word in a sequence.",
    liveUrl: "https://github.com/ashbi8137/Next_word",
    githubUrl: "https://github.com/ashbi8137/Next_word",
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  return (
    <section id="projects" className="relative">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>

              {/* Preview Image Section - only for first 6 projects */}
              {index < 6 && (
                <div className="relative h-48 overflow-hidden group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button 
                        className="w-full h-full focus:outline-none"
                        onClick={() => setSelectedImage(project.preview || "")}
                      >
                        <img
                          src={project.preview || "/placeholder-project.png"}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                      <img
                        src={selectedImage || ""}
                        alt="Project Preview"
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              <CardContent className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}

                  {project.inProgress && (
                    <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                      In Progress
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>

                <div className="flex gap-3 mt-auto">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                  </Button>

                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

