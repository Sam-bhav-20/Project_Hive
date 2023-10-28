import { useState } from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Landing from '../pages/Landing'
import {ToastContainer} from 'react-toastify';
import Contact from '../pages/Contact'
import Privateroute from "../components/Privateroute"
import Userdashboard from "../pages/user-routes/Userdashboard"
import UpdateBlog from "../pages/UpdateBlog"
import ProfileInfo from "../pages/user-routes/ProfileInfo"
import PostPage from "../pages/PostPage";
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "../context/UserProvider"
import 'bootstrap/dist/css/bootstrap.css';
import NewFeed from '../components/NewFeed'
import Attach from './Attach'

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
            <ToastContainer position='bottom-center' autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        <Routes>
              {/* <Route path="/" element={<Landing/>}/> */}
              <Route path="/" element={<Homepage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/attach" element={<Attach/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/posts/:postId" element={<PostPage />} />

              <Route path="/user" element={<Privateroute/>}>
                <Route path='dashboard' element={<Userdashboard/>}/>
                <Route path='feed' element={<NewFeed/>}/>
                <Route path="profile-info/:userId" element={<ProfileInfo />} />
                <Route path="update-blog/:blogId" element={<UpdateBlog />} />
              </Route>
        </Routes>
        
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
