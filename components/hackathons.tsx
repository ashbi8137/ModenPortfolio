"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const hackathons = [
  {
    id: 1,
    title: "Hack to the Future",
    organization: "IEEE-SB Manipal University Jaipur",
    description:
      "Secured first place in this prestigious hackathon, demonstrating excellence in problem-solving and technical implementation.",
    date: "2024",
    image: "/hackathon/hack tothe future.png",
    achievement: "First Place",
  },
  {
    id: 2,
    title: "Make-a-Ton",
    organization: "Cochin University of Science and Technology",
    description: "Developed innovative authentication solutions, securing victory in the Auth0 specialized track.",
    date: "2024",
    image: "/hackathon/SPARTANS-Ashbin P A_page-0001.jpg",
    achievement: "First place",
  },
  {
    id: 3,
    title: "Hack for nothing",
    organization: "Government Engineering College Thrissur",
    description: "Secured third place in this prestigious hackathon, by building a fun website",
    date: "2025",
    image: "/hackathon/code for nothing.jpg",
    achievement: "Third Place",
  },
  {
    id: 4,
    title: "EMERGE-X INNOVATIVE Buildathon",
    organization: "Kerala Blockchain Academy, Trivandrum",
    description:
      "Secured second place with AnonReport, an anonymous crime reporting system powered by blockchain technology.",
    date: "2024",
    image: "/hackathon/EmergeXinnovate.jpg",
    achievement: null,
  },
  {
    id: 5,
    title: "Botjungle x ECSA - Ideathon",
    organization: "IEEE CUSAT SB",
    description: "We tackled unique challenges together and brought our ideas to life.",
    date: "2024",
    image: "/hackathon/Ideathon-IEEE Cusat.jpg",
    achievement: null,
  },
  {
    id: 6,
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
    <section id="hackathons" className="relative">
      <h2 className="section-title">Hackathon Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 relative">
              {hackathon.achievement && (
                <div className="absolute top-0 right-0 z-10 mt-4 mr-4">
                  <Badge className="bg-accent text-accent-foreground flex items-center gap-1 px-3 py-1">
                    <Award className="h-3.5 w-3.5" />
                    {hackathon.achievement}
                  </Badge>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full" onClick={() => setSelectedImage(hackathon.image)}>
                      <img
                        src={hackathon.image || "/placeholder.svg"}
                        alt={hackathon.title}
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
                      alt="Hackathon"
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{hackathon.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{hackathon.organization}</p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{hackathon.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{hackathon.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

