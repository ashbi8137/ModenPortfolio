"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const events = [
  {
    id: 1,
    title: "Hack_Europa",
    type: "Hackathon",
    description: "8 hours of innovation, creation, and impact-date confirmed, planning underway.",
    date: "2025",
    image: "/event/Hack_Europa.jpg",
  },
  {
    id: 2,
    title: "Kochi Police x CUSAT",
    type: "Collaborative Event",
    description: "Led innovative solutions development and idea pitching for law enforcement challenges",
    date: "2025",
    image: "/event/Kochi police.jpg",
  },
  {
    id: 3,
    title: "Tink-Her-Hack",
    type: "Hackathon",
    description: "18-hour overnight hackathon empowering women in tech",
    date: "2025",
    image: "/event/Tinkerhack.jpg",
  },
  {
    id: 4,
    title: "Hackathon 101",
    type: "Workshop",
    description: "Introduction to hackathons for newcomers",
    date: "2024",
    image: "/event/hackathon 101.jpg",
  },
  {
    id: 5,
    title: "Network Next",
    type: "Networking Event",
    description: "Community networking and collaboration event",
    date: "2024",
    image: "/event/network nest.jpg",
  },
  {
    id: 6,
    title: "AR/VR Workshop",
    type: "Technical Workshop",
    description:
      "Organized an immersive AR/VR workshop at Dhishna, the official techfest of CUSAT, introducing students to extended reality technologies.",
    date: "2023",
    image: "/event/AR.jpg",
  },
]

export default function Events() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="events" className="relative">
      <h2 className="section-title">Events Organized</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative h-48 overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full" onClick={() => setSelectedImage(event.image)}>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-sm font-medium">View Larger</span>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
                    <DialogTitle>
                      <VisuallyHidden>Event Image</VisuallyHidden>
                    </DialogTitle>
                    <img src={selectedImage || ""} alt="Event" className="w-full h-auto max-h-[80vh] object-contain" />
                  </DialogContent>
                </Dialog>

                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">{event.type}</Badge>
              </div>

              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{event.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{event.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

