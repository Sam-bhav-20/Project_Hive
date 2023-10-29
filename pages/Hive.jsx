import React, { Component, useState, useEffect } from 'react';
    import  ReactDOM  from 'react-dom';
    import './hive.css';
    import searchlogo from "../assets/searchicon.jpg"
    import userIcon from "../assets/userIcon.jpg"
    import clockicon from "../assets/clockicon.jpg"
    import hearticon from "../assets/hearticon.jpg"
    import socialicon from "../assets/socialicon.jpg"
    import video from "../assets/contact.mp4"
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import WhatsAppIcon from '@mui/icons-material/WhatsApp';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import YouTubeIcon from '@mui/icons-material/YouTube';
    // import PaymentForm from './PaymentForm.jsx';
    import { Link, Route ,BrowserRouter} from 'react-router-dom';
  
    


    class ProjectHive extends Component {
        constructor() {
            super();
            this.state = {
                count: 0,
                comments: [],


                time: new Date(),
                // showPaymentForm: false,
            };
            this.timeInterval = setInterval(() => {
                this.setState({
                    time: new Date(),
                });
            }, 1000);
            
            
        }
        
        componentWillUnmount()
    {

        clearInterval(this.timeInterval);
    }


    handleHeartClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    handleCommentPost = () => {
        const comment = document.getElementById("comment").value;
        this.setState((prevState) => ({
            comments: [...prevState.comments, `TestUser:  ${comment}`],
        }));
        document.getElementById("comment").value = "";
    };

    // handleBuyNowClick = () => {
    //     this.setState({ isPaymentFormOpen: true });
    //   }
    
    //   handleClosePaymentForm = () => {
    //     this.setState({ isPaymentFormOpen: false });
    //   }
    


    render()
    {
        return (
            <>
          
            
                <div className="d1">
                <video
                    src={video}
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover -z-50 fixed"
                />

                    <div className="navbar">
                        <div className="links">
                            <div>
                                {/* <button className="navbtn" onClick={this.gallery}>
                                    Gallery
                                </button> */}
                            </div>
                            <div>
                                {/* <button className="navbtn" onClick={this.about}>
                                    AboutUs
                                </button> */}
                            </div>
                            <div>
                                {/* <button className="navbtn" onClick={this.contact}>
                                    ContactUs
                                </button> */}
                            </div>
                        </div>
                        <div className="head">
                            <h1 className="head1">Dive into our Hive</h1> <br />
                            <p className="head2">
                                Let's Get <span><a href="#">Started</a></span>
                            </p>
                        </div>
                    </div>
                    <div className="main">
                        <div className="dash">
                            <div className="dashcontent">
                                <div></div>
                                <div></div>
                                <div onClick={this.profile}>Profile</div>
                                <div onClick={this.gallery}>Gallery</div>
                                <div>Notifications</div>
                                <div onClick={this.about}>AboutUs</div>
                                <div onClick={this.contact}>ContactUs</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="bar">
                                <div className="search">
                                    <input id="search" type="search" />
                                </div>
                                <div className="lense">
                                    <img src={searchlogo} alt="" />
                                </div>
                                <div className="user">
                                    <a href="profile.html">
                                        <img src={userIcon} alt="" />
                                    </a>
                                    <div className="username">TestUser</div>
                                    <div className="logout">
                                        <input type="button" onClick={this.home} value="LogOut" />
                                    </div>
                                </div>
                            </div>

                            <div className="project1">
                                <div className="prohead">
                                    <h1  className='font-semibold bg-gradient-to-r from-blue-900 via-pink-500 to-blue-500 text-black'>The Odin Project</h1>
                                    <div className="time">
                                        <div className="clock">
                                            <img src={clockicon} alt="" />
                                        </div>
                                        <h3>
                                            {this.state.time.toLocaleTimeString()};
                                        </h3>
                                    </div>
                                </div>
                                <h4> User 1 </h4>
                                <div className="proj1">
                                    <div className="img">
                                        {/* <img src={hearticon} alt="xxx" /> */}
                                        <div className="count">{this.state.count} likes</div>
                                    </div>
                                    <div className="discription">
                                        <h3>Description</h3>
                                        <p>
                                            this webpage is divided into 2 sections Right section - a signup form
                                            <br /> Left section - picture of the Logo
                                        </p>
                                        <h6>creators- IIITL USER,TestUser</h6>
                                        <h6>28-10-2023</h6>
                                        <h6 className="counter">{this.state.count} likes</h6>
                                        <div className="comments">
                                            <h4>Comments</h4>
                                            <div className="commentbox">
                                                <h6>
                                                    <ul>
                                                        {this.state.comments.map((comment, index) => (
                                                            <li key={index}>{comment}</li>
                                                        ))}
                                                    </ul>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="proj2">
                                    <button className='bg-blue-500 text-white  font-bold rounded transform transition duration-300 hover:scale-110 hover:bg-purple-600'>
                                        
                                        
                                        <span >Buy Now </span>
                                    
                                    </button>
                                    
                                    <img src={hearticon} width="" alt=""  onClick={this.handleHeartClick} />
                                    <input id="comment" type="text" placeholder="Comment here!" />
                                    <img
                                        className='mx-3'
                                        src={socialicon}
                                        alt=""
                                        onClick={this.handleCommentPost}
                                    />
                                </div>
                            </div>
                           
                            <div className="project1">
                                <div className="prohead">
                                    <h1 className='font-semibold bg-gradient-to-r from-blue-900 via-pink-500 to-blue-500 text-black'>The Grid</h1>
                                    <div className="time">
                                        <div className="clock"> <img src={clockicon} alt="" /></div>
                                        <h3> {this.state.time.toLocaleTimeString()};</h3>


                                    </div>
                                </div>
                                <h4> User 2 </h4>
                                <div className="proj1">
                                    <div className="img1">
                                        {/* <img src={hearticon} alt="" /> */}
                                    <div className="count">{this.state.count} likes</div>

                                    </div>
                                    <div className="discription">
                                        <h3>Description</h3>
                                        <p>this webpage contains a Grid with transitions</p>
                                        <h6>creaters- IIITL USER2,Anonymouse </h6>
                                        <h6>28-10-2023</h6>
                                        <h6 id="outercount1">{this.state.count} likes </h6>
                                        <div className="comments">
                                            <h4>Comments</h4>
                                            <div className="commentbox">
                                                <h6>

                                                {this.state.comments.map((comment, index) => (
                                                            <li key={index}>{comment}</li>
                                                        ))}
                                                </h6>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="proj2">
                                <button className='bg-blue-500 text-white  text-center font-bold rounded transform transition duration-300 hover:scale-110 hover:bg-purple-600'>
                               
                                        
                                        <span >Buy Now </span>
                                    </button>
                                <img src={hearticon} alt="xxx" onClick={this.handleHeartClick} />
                                    <input id="comment2" type="text" placeholder="Comment here!" />
                                    <img id="post2" className='mx-3' src={socialicon} alt="" />
                                </div>
                            </div>
                           
                            <div className="project1">
                                <div className="prohead">
                                    <h1 className='font-semibold bg-gradient-to-r from-blue-900 via-pink-500 to-blue-500 text-black '>The Project Alpha</h1>
                                    <div className="time">
                                        <div className="clock"> <img src={clockicon} alt="" /></div>
                                        <h3> {this.state.time.toLocaleTimeString()};</h3>


                                    </div>
                                </div>
                                <h4> User 3 </h4>
                                <div className="proj1">
                                    <div className="img2">
                                        {/* <img src={hearticon} alt=""   /> */}
                                        <div className="count">{this.state.count} likes </div>
                                    </div>
                                    <div className="discription">
                                        <h3>Description</h3>
                                        <p>The Description of this project goes here</p>
                                        <h6>creators- ProKoder69 </h6>
                                        <h6>28-10-2023</h6>
                                        <h6>{this.state.count} likes</h6>
                                        <div className="comments">
                                            <h4>Comments</h4>
                                            <div className="comment">
                                                <h6>
                                                {this.state.comments.map((comment, index) => (
                                                            <li key={index}>{comment}</li>
                                                        ))}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="proj2">
                                    
                                <button className='bg-blue-500 text-white  font-bold rounded transform transition duration-300 hover:scale-110 hover:bg-purple-600' >
                                

                                        
                                        <span >Buy Now </span>
                                    </button>
                                    
                                    
                                    <img src={hearticon} width="" alt=""  onClick={this.handleHeartClick}/><input type="text"
                                        placeholder="Comment here!" />
                                    <img className='mx-3' src={socialicon} alt="" />
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="footer">
                        <div className="social">
                            <LinkedInIcon className='text-blue-900 mx-2 hover:text-4xl' />
                            <InstagramIcon className='text-pink-600 mx-2 hover:text-4xl'/>
                            <WhatsAppIcon className='text-green-500 mx-2 hover:text-4xl'/>
                            <TwitterIcon className='text-blue-500 mx-2 hover:text-4xl'/>
                            <YouTubeIcon className='text-red-700 mx-2 hover:text-4xl'/>

                        </div>
                            
                        <div className="ftr2">
                            © ProJectHive | <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
               
            </>
            
        );
    }
    }

    export default ProjectHive;