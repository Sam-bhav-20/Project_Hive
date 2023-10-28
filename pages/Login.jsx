import React from 'react'
import Logo from '../assets/logo.png'
import "../assets/styles/login.css"
import {toast} from 'react-toastify'
import { loginUser } from '../services/user-service'
import { doLogin } from '../auth'
import { useNavigate } from 'react-router-dom'
import userContext from "../context/userContext"
import { useContext,useState } from 'react'
import Navbar from '../components/Landing/Navbar'
function Login() {
  document.title="Login"
  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password  is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          userContxtData.setUser({
            data: data.user,
            login: true,
          });
          navigate("/user/dashboard");
        });

        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong  on sever !!");
        }
      });
  };

  return (
    <div className='body_login'>
      <Navbar/>
      <div className='background_login'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      <div className='cover'>
        <form onSubmit={handleFormSubmit} className='login_form'>
          <div className='login_heading'>
            <img src={Logo} className='login_img' alt="logo"/>
            <h1 className='h1_login'>Project Hive</h1>
          </div>
          <label className='label_login' htmlFor='username'>Username</label>
          <input className='input_login' type="text" placeholder='Email here' id='email' value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}  name="username"/>
          <label className='label_login' htmlFor='password'>Password</label>
          <input className='input_login' type='password'placeholder='Password here' id='password' value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")} name='password'/>

          <button className='button_login' type='submit'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login