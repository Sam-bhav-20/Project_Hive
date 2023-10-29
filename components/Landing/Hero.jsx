import React, { useEffect } from 'react'
import BGLogo from "../../assets/hero_landing_bg.jpg"
import "../../assets/styles/landing.css"
import { Link } from 'react-router-dom'
import Typed from 'typed.js';
function Hero() {
  
  return (
    <div className=' text-white max-h-screen items-center lg:py-30 pb-40 py-20'>
        <h1 className='text-center lg:text-8xl md:text-7xl sm:text-5xl xl:text-8xl 2xl:text-8xl text-3xl mt-40' >
        Upload.Code.Improve
        </h1>
        <p className='p-4 mt-10 mx-4 text-center lg:text-xl md:text-lg  text-md'>Project Hive is a collaborative project management platform designed to streamline your team's workflow and enhance productivity.</p>
        <div className='flex items-center justify-center pb-20'>
            <Link to={'/login'}>
                <button type='button'  className='btn hover:btn-blue-700  font-bold py-3 px-4 rounded-full shadow bg-white text-black mt-10 submit'><span className='span text-lg'>Get Started!</span></button>
            </Link>
        </div>
    </div>
  )
}


export default Hero