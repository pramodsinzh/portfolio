 /**node module */
 import { useState } from "react"

 //custom modules
 import { cn } from "@/lib/utils"

 /**constants */
 import { navLinks } from "@/constants"

 
export const FloatingMenu = () => {
  const [active, setActive] = useState('#hero')
  return (
     <div className="fixed right-10 top-1/2 -translate-y-1/2 hover:bg-black/70 transition duration-200 border hidden border-neutral-600 pt-4 rounded-full z-0  lg:block">
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = active === link.link;
        return (
          <a 
          key={link.label}
          href={link.link}
          onClick={()=> setActive(link.link)}
          className={cn('text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4', isActive && 'text-primary')}
          >
            <Icon className= 'size-5'/>
          </a>
        )
      })}
     </div>
  )
} 