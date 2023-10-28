import React,{Fragment, useContext,useEffect,useState} from 'react'
import MainLogo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom'
import userContext from '../../context/userContext';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../../auth';

function Navbar() {
  const userContextData = useContext(userContext)
  let navigate = useNavigate()

  const [login,setLogin]= useState(false)
  const [user,setUser]=useState(undefined)
  const [menuOpen,setMenuOpen]=useState(false);
  const handleNav=()=>{
    setMenuOpen(!menuOpen);
  }

  useEffect(()=>{
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())
  },[login])

  const logout = ()=>{
    doLogout(()=>{
      setLogin(false)
      userContextData.setUser({
        data: null,
        login:false
      })
      navigate("/")
    })
  }

  return (
  <nav className='container border-b border-white-200 backdrop-filter backdrop-blur-sm bg-black text-white bg-opacity-30 w-full h-20 shadow-xl '>
    <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <img src={MainLogo} className='h-14 w-14 cursor-pointer' alt="Logo"/>
        </Link>
        <h1 className='px-4 text-2xl'>Project Hive</h1>
      </div>
      <div className='hidden sm:flex justify-around'>
        <ul className='hidden sm:flex'>
          <Link to='/about'>
            <li className='ml-10 hover:border-b text-xl'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='ml-10 hover:border-b text-xl'>Contact</li>
          </Link>
          {login&&(
            <Fragment>
              <Link to={`/user/profile-info/${user.id}`}>
              <li className='ml-10 hover:border-b text-xl'>Profile Info</li>
              </Link>
              <Link to={"/user/feed"}>
                    <li className='ml-10 hover:border-b text-xl'>Feed</li>
                  </Link>
              <Link to={"/user/dashboard"}>
              <li className='ml-10 hover:border-b text-xl'>{user.email}</li>
              </Link>
              <button onClick={logout}> 
              <li className='ml-10 hover:border-b text-xl'>Logout</li>
              </button>
            </Fragment>
          )}
          {!login&&(
          <Fragment>
            <Link to ='/'>
            <li className='ml-10 hover:border-b text-xl'>Home</li>
            </Link>
            <Link to='/login'>
            <li className='ml-10 hover:border-b text-xl'>Login</li>
          </Link>
          <Link to='/signup'>
            <li className='ml-10 hover:border-b text-xl'>SignUp</li>
          </Link>
          </Fragment>)

        }
        </ul>
      </div>
      <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
        <AiOutlineMenu size={25}/>
      </div>
      <div className={
        menuOpen
        ?'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-400 bg-black'
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-400'
      }>
        <div className='flex w-full items-center justify-end'>
          <div onClick={handleNav} className='cursor-pointer'>
            <AiOutlineClose size={25}/>
          </div>
        </div>
        <div className='flex-col py-4 '>
          <ul>
            <Link to={'/'}>
              <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>Home</li>
            </Link>
            <Link to={'/about'}>
              <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>About</li>
            </Link>
            <Link to={'/contact'}>
              <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>Contact</li>
            </Link>
            { !login&&(
              <Fragment>
            <Link to={'/login'}>
              <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>Login</li>
            </Link>
            <Link to={'/signup'}>
              <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>SignUp</li>
            </Link>
            </Fragment>)}
            {
              login && (
                <Fragment>
                  
                  <Link to={`/user/profile-info/${user.id}`}>
                  <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>Profile Info</li>
                  </Link>
                  <Link to={"/user/dashboard"}>
                  <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>{user.email}</li>
                  </Link>
                  <Link to={"/user/feed"}>
                    <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>Feed</li>
                  </Link>
                  <Link onClick={logout}> 
                  <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer'>Logout</li>
                  </Link>
                </Fragment>
              )
            }
          </ul>
        </div>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <div className='flex justify-around items-center'>
            <img src={MainLogo} className='h-10 w-10 cursor-pointer' alt="Logo" onClick={()=>setMenuOpen(false)}/>
            <h1 className=' text-lg ' onClick={handleNav}>Project Hive</h1>
            </div>
          </Link>

        </div>
      </div>
    </div>
  </nav>    
  )
}

export default Navbar