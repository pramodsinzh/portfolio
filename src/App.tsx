/**
 * @copyright 2026 pramod_singh
 * @license Apache-2.0
 */

//node modules
import { useEffect } from "react"
import Lenis from "lenis"

//components 
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/ui/Stats"
import { Projects } from "@/components/sections/Projects"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Resume } from "@/components/sections/Resume"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"

export const App = () => {
  
  useEffect(()=> {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
  )
}