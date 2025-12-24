"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { RevealOnScroll } from "@/components/RevealOnScroll"

const hackathons = [
  {
    id: 1,
    title: "Hack_Europa",
    organization: "SAIT-CUSAT",
    description:
      "Secured first place for best Project Implementation, showcasing innovative solutions and technical excellence.",
    date: "2024",
    image: "/hackathon/Hack_Europa.jpg",
    achievement: "First Place",
  },
  {
    id: 2,
    title: "Hack to the Future",
    organization: "IEEE-SB Manipal University Jaipur",
    description:
      "Secured first place in this prestigious hackathon, demonstrating excellence in problem-solving and technical implementation.",
    date: "2024",
    image: "/hackathon/hack tothe future.png",
    achievement: "First Place",
  },
  {
    id: 3,
    title: "Make-a-Ton",
    organization: "Cochin University of Science and Technology",
    description: "Developed innovative authentication solutions, securing victory in the Auth0 specialized track.",
    date: "2024",
    image: "/hackathon/SPARTANS-Ashbin P A_page-0001.jpg",
    achievement: "First place",
  },
  {
    id: 4,
    title: "Hack for nothing",
    organization: "Government Engineering College Thrissur",
    description: "Secured third place in this prestigious hackathon, by building a fun website",
    date: "2025",
    image: "/hackathon/code for nothing.jpg",
    achievement: "Third Place",
  },
  {
    id: 5,
    title: "EMERGE-X INNOVATIVE Buildathon",
    organization: "Kerala Blockchain Academy, Trivandrum",
    description:
      "Secured second place with AnonReport, an anonymous crime reporting system powered by blockchain technology.",
    date: "2024",
    image: "/hackathon/EmergeXinnovate.jpg",
    achievement: null,
  },
  {
    id: 6,
    title: "Botjungle x ECSA - Ideathon",
    organization: "IEEE CUSAT SB",
    description: "We tackled unique challenges together and brought our ideas to life.",
    date: "2024",
    image: "/hackathon/Ideathon-IEEE Cusat.jpg",
    achievement: null,
  },
  {
    id: 7,
    title: "Code Slush",
    organization: "Innovation Track",
    description:
      "Created a unique solution for digital accessibility, placing in the top 15 teams among global participants.",
    date: "2024",
    image: "/hackathon/code slush.jpg",
    achievement: null,
  },
]

export default function Hackathons() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="hackathons" className="relative py-24 bg-muted/20">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealOnScroll className="w-full text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Innovating</h2>
          <h3 className="section-title font-serif text-4xl md:text-5xl">Hackathon <span className="text-primary italic">Achievements</span></h3>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {hackathons.map((hackathon, index) => (
            <div key={hackathon.id} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex flex-col">
              <RevealOnScroll delay={index * 0.1} width="100%" className="h-full">
                <Card className="group h-full flex flex-col overflow-hidden border border-border/40 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 relative">
                  {hackathon.achievement && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-yellow-500/90 text-black font-bold shadow-[0_0_15px_rgba(234,179,8,0.4)] border-none flex items-center gap-1.5 px-3 py-1">
                        <Award className="h-3.5 w-3.5" />
                        {hackathon.achievement}
                      </Badge>
                    </div>
                  )}

                  <div className="relative h-56 overflow-hidden">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full h-full cursor-zoom-in" onClick={() => setSelectedImage(hackathon.image)}>
                          <img
                            src={hackathon.image || "/placeholder.svg"}
                            alt={hackathon.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-bold tracking-wider border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">VIEW IMAGE</span>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                        <DialogTitle>
                          <VisuallyHidden>{hackathon.title}</VisuallyHidden>
                        </DialogTitle>
                        <img
                          src={selectedImage || ""}
                          alt={hackathon.title}
                          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-muted-foreground">{hackathon.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{hackathon.title}</h3>
                    <p className="text-primary/80 text-sm font-medium mb-3">{hackathon.organization}</p>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{hackathon.description}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

