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
  const [successStyle, setSuccessStyle] = useState(0);

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
                  <div className="mt-6 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-5 shadow-lg transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
                      <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0">
                          <div className="relative">
                            <div className="animate-ping absolute h-full w-full rounded-full bg-white opacity-75"></div>
                            <svg className="relative h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">Message Sent Successfully!</h3>
                          <p className="opacity-90">{notification.message}</p>
                          <div className="mt-2 flex space-x-2">
                            <a href="mailto:ashputhusseri@gmail.com" className="text-xs bg-white bg-opacity-25 hover:bg-opacity-40 px-2 py-1 rounded-full transition-all duration-200">
                              Email Again
                            </a>
                            <button 
                              onClick={() => setNotification({ type: null, message: '' })}
                              className="text-xs bg-white bg-opacity-25 hover:bg-opacity-40 px-2 py-1 rounded-full transition-all duration-200"
                              type="button"
                            >
                              Dismiss
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {notification.type === 'success' && successStyle === 1 && (
                  <div className="mt-6">
                    <div className="bg-white dark:bg-slate-800 border-l-4 border-green-500 p-5 shadow-md rounded-r-lg">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-green-800 dark:text-green-400">Success!</div>
                          <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">{notification.message}</div>
                          <div className="mt-2">
                            <button
                              type="button"
                              onClick={() => setNotification({ type: null, message: '' })}
                              className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none"
                            >
                              Got it
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {notification.type === 'success' && successStyle === 2 && (
                  <div className="mt-6">
                    <div className="relative py-6 px-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-40 h-40 -mt-16 -ml-20 bg-white bg-opacity-10 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-40 h-40 -mb-16 -mr-20 bg-white bg-opacity-10 rounded-full"></div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-center mb-4">
                          <span className="flex h-14 w-14 bg-white bg-opacity-20 rounded-full items-center justify-center">
                            <svg className="h-9 w-9 text-white animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-2">Message Sent!</h2>
                        <p className="text-center text-white text-opacity-80 mb-4">{notification.message}</p>
                        <div className="text-center">
                          <button
                            onClick={() => setNotification({ type: null, message: '' })}
                            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm font-medium text-white transition-all duration-200"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {notification.type === 'error' && (
                  <div className="mt-6 p-4 rounded-md relative bg-red-50 text-red-800 border border-red-200">
                    <button 
                      onClick={() => setNotification({ type: null, message: '' })}
                      className="absolute top-2 right-2 text-xs opacity-70 hover:opacity-100"
                      type="button"
                    >
                      ✕
                    </button>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">❌</span>
                      <p>{notification.message}</p>
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

