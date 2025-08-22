import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // refs for custom cursor position tracking
  const mouse = useRef({x: 0, y: 0})
  const position = useRef({x: 0, y: 0})

  

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
    
    {/* Custom cursor ring */}
    <div  ref={outlineRef} className='fixed top-0 left-0 w-10 rounded-full
    border border-primary pointer-events-none z-[9999]'></div>
    
    {/* Custom cursor dot */}
    <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full
    bg-primary pointer-events-none z-[9999]'></div>


    </div>
  )
}

export default App