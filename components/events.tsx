"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowUpRight, X } from "lucide-react"
import { RevealOnScroll } from "@/components/RevealOnScroll"

const events = [
  {
    id: 1,
    title: "Hack_Europa",
    type: "Hackathon",
    description: "8 hours of innovation, creation, and impact.",
    date: "2025",
    image: "/event/Hack_Europa.jpg",
  },
  {
    id: 2,
    title: "Kochi Police x CUSAT",
    type: "Collaboration",
    description: "Developing solutions for law enforcement challenges.",
    date: "2025",
    image: "/event/Kochi police.jpg",
  },
  {
    id: 3,
    title: "Tink-Her-Hack",
    type: "Hackathon",
    description: "18-hour overnight hackathon empowering women in tech.",
    date: "2025",
    image: "/event/Tinkerhack.jpg",
  },
  {
    id: 4,
    title: "Hackathon 101",
    type: "Workshop",
    description: "Introduction to hackathons for newcomers.",
    date: "2024",
    image: "/event/hackathon 101.jpg",
  },
  {
    id: 5,
    title: "Network Next",
    type: "Networking",
    description: "Community networking and collaboration event.",
    date: "2024",
    image: "/event/network nest.jpg",
  },
  {
    id: 6,
    title: "AR/VR Workshop",
    type: "Workshop",
    description: "Immersive extended reality technology workshop.",
    date: "2023",
    image: "/event/AR.jpg",
  },
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <section id="events" className="relative py-24 overflow-hidden bg-muted/20">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Community Impact</h2>
          <h3 className="section-title font-serif text-4xl md:text-5xl">Curated <span className="text-primary italic">Events</span></h3>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <RevealOnScroll key={event.id} delay={index * 0.1}>
              <Card
                className="group relative h-full overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Date Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="bg-background/60 backdrop-blur-md border-border/20 text-foreground font-mono text-xs">
                    {event.date}
                  </Badge>
                </div>

                {/* Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image || "/placeholder.jpg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20 mb-2">{event.type}</Badge>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto relative h-64 md:h-full">
                  <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-primary mb-2 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedEvent.date}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">{selectedEvent.title}</h3>
                  <Badge className="self-start mb-6 bg-primary/20 text-primary border-primary/20">{selectedEvent.type}</Badge>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
