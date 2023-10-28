import React from 'react'
import {BsGithub,BsFacebook,BsLinkedin,BsTwitter,BsInstagram} from 'react-icons/bs';
function Footer() {
  return (
    
    <footer className='text-gray-500 bg-gray-800 py-5 flex items-center justify-around px-10 flex-wrap-reverse'>
      <div> 2023 ProjectHive,.inc </div>
      <div><a className='cursor-pointer' href='/'>Terms and Conditions</a></div>
      <div className='flex justify-between  items-center'>
        
          <p className='pr-2'><BsGithub size={25}/></p>
          <p className='pr-2'><BsFacebook size={25}/></p>
          <p className='pr-2'><BsLinkedin size={25}/></p>
          <p className='pr-2'><BsTwitter size={25}/></p>
          <p><BsInstagram size={25}/></p>
      </div>
    </footer>
  );
}
  


export default Footer