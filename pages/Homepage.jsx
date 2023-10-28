import React from 'react'
import Navbar from '../components/Landing/Navbar'
import NewFeed from '../components/NewFeed'
import Hero from '../components/Landing/Hero'
import Footer from '../components/Landing/Footer'
import Attach from '../src/Attach'
function Homepage() {
  function LoggedIn(){
    if(localStorage.getItem("LoggedIn")){
      return <NewFeed/>
    }else{
      return <Hero/>
    }
  }
  return (
    <div className='landing_main_div'>
        <Navbar/>
          {<LoggedIn />}
        <Footer/>
    </div>
  )
}

export default Homepage