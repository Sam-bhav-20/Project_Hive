import React from 'react'
import Navbar from '../components/Landing/Navbar'
import Hero from '../components/Landing/Hero'
import "../assets/styles/landing.css"
import Footer from '../components/Landing/Footer'
import { isLoggedIn } from '../auth'
function Landing() {
  return (
    <div className='landing_main_div'>
      <Navbar/>
      {
        
      
      }
      <Footer/>
    </div>
  )
}

export default Landing