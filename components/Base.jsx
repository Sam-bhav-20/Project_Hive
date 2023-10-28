import React from 'react'
import Navbar from './Landing/Navbar'
import Footer from "./Landing/Footer"
function Base({children}) {
  return (
    <div className='container'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Base