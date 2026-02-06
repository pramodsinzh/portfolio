/**
 * @copyright 2026 pramod_singh
 * @license Apache-2.0
 */

//Node modules
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

//Styles
import '@/index.css'

//Components
import { IntroAnimation } from "@/components/customUI/IntroAnimation"
import { App } from '@/App'
import { Sidebar } from '@/components/sections/Sidebar'
import { FloatingMenu } from '@/components/sections/FloatingMenu'
import { Profile } from '@/components/sections/Profile'

function RootApp() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <StrictMode>
      <>
        {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
        {introDone && (
          <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
            <Profile />
            <Sidebar />
            <App />
            <FloatingMenu />
          </div>
        )}
      </>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<RootApp />)
