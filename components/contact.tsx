"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <h2 className="section-title">Get In Touch</h2>

      <motion.div
        className="max-w-2xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 transition-colors hover:bg-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                  <a
                    href="mailto:ashputhusseri@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    ashputhusseri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 transition-colors hover:bg-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
                  <a href="tel:+918137840842" className="text-foreground hover:text-primary transition-colors">
                    +91 8137840842
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 transition-colors hover:bg-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                  <p className="text-foreground">Ernakulam, Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ashbi8137" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/ashbin-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <a href="https://devfolio.co/@Ashbin" target="_blank" rel="noopener noreferrer" aria-label="Devfolio">
                  <Code className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

