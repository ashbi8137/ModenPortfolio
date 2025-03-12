"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const volunteerActivities = [
  {
    id: 1,
    title: "DevFest Kochi '24",
    role: "Event Volunteer",
    description:
      "Volunteered at DevFest Kochi '24 at XIME Kalamassery, engaging with developers and exploring the latest tech innovations. A great experience connecting with the community and contributing to the event's success.",
    date: "2024",
    image: "/Images/volunteer/devfest.jpg",
  },
  {
    id: 2,
    title: "IEEE-MSIGMA",
    role: "Hospitality Volunteer",
    description:
      "Volunteered at the IEEE-MSIGMA Project Presentation, organized by IEEE Kerala Section & MSIGMA Gokulam. It was a rewarding experience contributing to the event, connecting with innovators, and learning from cutting-edge projects.",
    date: "2023",
    image: "/Images/volunteer/IEEE-Msigma.jpeg",
  },
  {
    id: 3,
    title: "Mu-learn Workshop",
    role: "Event Volunteer",
    description:
      "Attended the mu-learn Film Club Workshop at Kerala Startup Mission, gaining insights from industry experts on story narration and filmmaking. An enriching session that deepened my understanding of storytelling.",
    date: "2023",
    image: "/Images/volunteer/filmworkshop.jpg",
  },
]

export default function Volunteering() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="volunteering" className="relative">
      <h2 className="section-title">Community Involvement</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {volunteerActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative h-48 overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full" onClick={() => setSelectedImage(activity.image)}>
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-sm font-medium">View Larger</span>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
                    <img
                      src={selectedImage || ""}
                      alt="Volunteer Activity"
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {activity.role}
                </Badge>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{activity.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{activity.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

