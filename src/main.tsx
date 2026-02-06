/**
 * @copyright 2026 pramod_singh
 * @license Apache-2.0
 */

//Node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Styles
import '@/index.css'

//Components
import { App } from '@/App'
import { Sidebar } from '@/components/sections/Sidebar'
import { FloatingMenu } from '@/components/sections/FloatingMenu'
import { Profile } from '@/components/sections/Profile'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <Profile />
      <App />
      <FloatingMenu />
    </div>
  </StrictMode>,
)
