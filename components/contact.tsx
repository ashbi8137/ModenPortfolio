"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Add a state for notification
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Add state for notification style
  const [successStyle, setSuccessStyle] = useState<number>(0);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Q1V3bVPwWqliIW56K')
  }, [])

  // Show a random success style when notification changes to success
  useEffect(() => {
    if (notification.type === 'success') {
      // Random number between 0-2 for 3 different styles
      setSuccessStyle(Math.floor(Math.random() * 3));
    }
  }, [notification.type]);

  // Add useEffect to clear notification after 7 seconds
  useEffect(() => {
    if (notification.type) {
      const timer = setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 7000);
      
      return () => clearTimeout(timer);
    }
  }, [notification.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset notification
    setNotification({ type: null, message: '' });
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information ⚠️",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
        duration: 3000,
      });
      setNotification({ 
        type: 'error', 
        message: 'Please fill in all fields before sending.' 
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const currentTime = new Date().toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true,
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      const response = await emailjs.send(
        'service_zf0hzi8',
        'template_lvo7cjk',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
        },
        'Q1V3bVPwWqliIW56K'
      );

      if (response.status === 200) {
        toast({
          variant: "default",
          title: "Message Sent Successfully! 🎉",
          description: "Thanks for reaching out! I'll get back to you soon.",
          className: "bg-green-100 border-green-200 text-green-800",
          duration: 4000,
        });
        
        setNotification({ 
          type: 'success', 
          message: 'Message sent successfully! Thanks for reaching out.' 
        });
        
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email error:', error);
      toast({
        variant: "destructive",
        title: "Message Not Sent ❌",
        description: "Oops! Something went wrong. Please try again.",
        duration: 4000,
      });
      
      setNotification({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: 'name' | 'email' | 'message'
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative">
      <h2 className="section-title">Get In Touch</h2>

      <motion.div
        className="max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <a 
                  href="mailto:ashputhusseri@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 transition-colors hover:bg-primary/10"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                    <span className="text-foreground hover:text-primary transition-colors">
                      ashputhusseri@gmail.com
                    </span>
                  </div>
                </a>

                <a 
                  href="tel:+918137840842"
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 transition-colors hover:bg-primary/10"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
                    <span className="text-foreground hover:text-primary transition-colors">
                      +91 8137840842
                    </span>
                  </div>
                </a>

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

          {/* Message Form Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    required
                    disabled={isSubmitting}
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    required
                    disabled={isSubmitting}
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, 'message')}
                    className="min-h-[150px] focus:ring-2 focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full transition-all duration-200 hover:scale-[1.02]" 
                  disabled={isSubmitting}
                >
                  <Send className={`h-4 w-4 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                {notification.type === 'success' && successStyle === 0 && (
                  <div className="mt-4">
                    <div className="bg-card border border-border rounded-md p-4 shadow-sm backdrop-blur-sm">
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="bg-primary/10 rounded-full p-1.5">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium">Message Sent</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{notification.message}</p>
                        </div>
                        <button 
                          onClick={() => setNotification({ type: null, message: '' })}
                          className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
                          type="button"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {notification.type === 'success' && successStyle === 1 && (
                  <div className="mt-4">
                    <div className="bg-gradient-to-r from-primary/10 to-card border border-border rounded-md p-4 shadow-sm">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <div className="bg-primary/10 rounded-full p-1 mr-2">
                              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <h3 className="text-sm font-medium">Message Sent Successfully</h3>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1.5 ml-7">{notification.message}</p>
                        </div>
                        <button 
                          onClick={() => setNotification({ type: null, message: '' })}
                          className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
                          type="button"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {notification.type === 'success' && successStyle === 2 && (
                  <div className="mt-4">
                    <div className="border border-accent/30 bg-accent/5 rounded-md p-4 shadow-sm backdrop-blur-sm">
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <div className="relative">
                            <div className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-30"></div>
                            <svg className="relative h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-accent-foreground">Success!</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{notification.message}</p>
                        </div>
                        <button 
                          onClick={() => setNotification({ type: null, message: '' })}
                          className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
                          type="button"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {notification.type === 'error' && (
                  <div className="mt-4 p-3 rounded-md relative bg-red-50/50 text-red-800 border border-red-200/70">
                    <div className="flex items-center">
                      <span className="text-sm mr-2">❌</span>
                      <p className="text-xs">{notification.message}</p>
                      <button 
                        onClick={() => setNotification({ type: null, message: '' })}
                        className="ml-auto text-red-400 hover:text-red-600 transition-colors"
                        type="button"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

