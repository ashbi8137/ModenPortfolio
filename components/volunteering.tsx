"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { RevealOnScroll } from "@/components/RevealOnScroll"

const volunteerActivities = [
  {
    id: 1,
    title: "Vibhava Innovation Summit",
    role: "Tech Volunteer",
    description:
      "Led the development and management of the event website, ensuring seamless user experience and real-time updates throughout the innovation summit.",
    date: "2025",
    image: "/community/vibhava.jpg",
  },
  {
    id: 2,
    title: "DevFest Kochi '24",
    role: "Event Volunteer",
    description:
      "Volunteered at DevFest Kochi '24 at XIME Kalamassery, engaging with developers and exploring the latest tech innovations. A great experience connecting with the community and contributing to the event's success.",
    date: "2024",
    image: "/community/devfest.jpg",
  },
  {
    id: 3,
    title: "IEEE-MSIGMA",
    role: "Hospitality Volunteer",
    description:
      "Volunteered at the IEEE-MSIGMA Project Presentation, organized by IEEE Kerala Section & MSIGMA Gokulam. It was a rewarding experience contributing to the event, connecting with innovators, and learning from cutting-edge projects.",
    date: "2023",
    image: "/community/IEEE-Msigma.jpeg",
  },
  {
    id: 4,
    title: "Mu-learn Workshop",
    role: "Event Volunteer",
    description:
      "Attended the mu-learn Film Club Workshop at Kerala Startup Mission, gaining insights from industry experts on story narration and filmmaking. An enriching session that deepened my understanding of storytelling.",
    date: "2023",
    image: "/community/filmworkshop.jpg",
  },
]

export default function Volunteering() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="volunteering" className="relative py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealOnScroll className="w-full text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Giving Back</h2>
          <h3 className="section-title font-serif text-4xl md:text-5xl">Community <span className="text-primary italic">Involvement</span></h3>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {volunteerActivities.map((activity, index) => (
            <RevealOnScroll key={activity.id} delay={index * 0.1} className="h-full" width="100%">
              <Card className="group h-full flex flex-col overflow-hidden border border-border/40 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full h-full cursor-zoom-in" onClick={() => setSelectedImage(activity.image)}>
                        <img
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xs font-bold tracking-wider border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">VIEW IMAGE</span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                      <DialogTitle>
                        <VisuallyHidden>{activity.title}</VisuallyHidden>
                      </DialogTitle>
                      <img
                        src={selectedImage || ""}
                        alt={activity.title}
                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">{activity.role}</Badge>
                    <span className="text-xs font-mono text-muted-foreground">{activity.date}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{activity.description}</p>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

