 /**
  * @copyright 2026 pramod_singh
  * @license Apache-2.0
  */

 //node modules
import { useEffect } from "react"

 //components
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/Hero"

 export const App = () => {
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
      <Hero />
    </main>
  )
 }