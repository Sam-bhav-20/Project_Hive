import React, { useEffect } from 'react'
import { useState } from 'react';
import Logo from '../assets/logo1.jpg'
import  Video from '../assets/contact.mp4'
import "../assets/styles/signup.css"
import { signUp } from '../services/user-service';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Landing/Navbar';

function Signup() {
  const navigate = useNavigate()
  document.title="Register Now!"
  const [data,setData]= useState({
    name:'',
    email:'',
    password:''
  })

  const [password,setPassword]=useState({
    password: '',
    cfmpassword: ''
  })
  const [error,setError]=useState({
    errors:{},
    isError:false
  })

  // const name_handler = document.getElementById("message1");


  useEffect(()=>{

    // if(data.name.length<4){
    //   name_handler.innerHTML="Username should contain minimum 4 characters";
    //   name_handler.style.color="red";
    // }

    

    console.log(password)
    if(password.password!=password.cfmpassword){
      document.getElementById("message3").innerHTML="Password are not matching"
      document.getElementById("message3").style.color="red";
    }
    if(password.password==password.cfmpassword){
      document.getElementById("message3").innerHTML=""
    }
  },[password])

  // useEffect(()=>{
  //   console.log(data)
  // },[data])

  //handle Change
  const handleChange=(e,property)=>{

    setData({...data,[property]:e.target.value})
  }

  const handleChange2=(e,property)=>{
    setPassword({...password,[property]:e.target.value});
  }

  const submitForm=(event)=>{
    event.preventDefault();
    // if(error.isError){
    //   toast.error("Form data is invalid , correct all ")
    //   return;
    // }
    //data validate

    //call server api for sending data
    signUp(data).then((resp)=>{
      console.log(resp)
      console.log("User successfully registered")
      toast.success("User registered successfully");
      navigate("/login")
    }).catch((error)=>{
      console.log(error)
      console.log("Error log")

      setError({
        errors:error,
        isError:true
      })
    })
  }

  return (
    <div className="body_signup">
      <video
                src={Video}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover -z-50 fixed"
            />
            <Navbar/>
    <div className="background_signup">
        <div className="shape_signup"></div>
        <div className="shape_signup"></div>
    </div>
   
    <div className="cover">
    <form onSubmit={submitForm} className="signup" style={{marginTop:'8rem'}}>
        <div className="heading_signup">
        <img style={{borderRadius:'50%'}} src={Logo} alt="logo"/>
        <h1 className="h1_signup">Project Hive</h1>
        </div>

        <div for="name"   className="text label_signup">Name:</div>
        <input 
            type="text" 
            className="inputs name_input" 
            id="name" 
            placeholder="Name" 
            onChange={(e)=>handleChange(e,'name')}
            value={data.name}
            required/>
        <span id="message1" className="text-danger label_signup" ></span>
        <div for="email" className="text label_signup"  >Email:</div>
        <input 
            type="email" 
            className="inputs" 
            id="email" 
            placeholder="Email" 
            onChange={(e)=>handleChange(e,'email')}
            value={data.email}
            required/>
        <span id="message2" className="text-danger label_signup" ></span>
        <div for="passport" className="text label_signup"  >Password:</div>
        <input 
            type="password" 
            className="inputs" 
            id="password" 
            minlength="6" 
            maxlength="15" 
            value={data.password}
            onChange={(e)=>{handleChange(e,'password'),
              handleChange2(e,'password')}}
            title="Should contain minimum 6 characters" 
            placeholder="Password" required/>
        <span id="message" className="text-danger label_signup" ></span>
        <div for="passport" className="text label_signup" >Confirm Password:</div>
        <input 
            type="password" 
            className="inputs" 
            id="cnpswd" 
            minlength="6" 
            maxlength="15" 
            onChange={(e)=>handleChange2(e,'cfmpassword')}
            title="Should contain minimum 6 characters" 
            placeholder="Confirm Password" />
        <span id="message3" className="text-danger label_signup" ></span> 
        <button type="submit" id="submit" onclick="checkPassword()" className="text-white buttons_signup">Sign Up</button>
        <hr/>
        </form>
    </div>
    </div>
  )
}

export default Signup