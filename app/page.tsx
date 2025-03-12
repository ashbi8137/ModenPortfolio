import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Events from "@/components/events"
import Hackathons from "@/components/hackathons"
import Volunteering from "@/components/volunteering"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundElements from "@/components/background-elements"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Events />
      <Hackathons />
      <Volunteering />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

