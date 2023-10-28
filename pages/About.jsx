import React from 'react';
import '../assets/styles/aboutus.css';
import logo from '../assets/logo.png';
import satvikImg from '../assets/profiles/satvikimg.jpg';
import ramanujanimg from '../assets/profiles/ramanujanimg.jpg';
import shreyashimg from '../assets/profiles/shreyashimg.jpg';
import tharunimg from '../assets/profiles/tharunimg.jpeg.jpg';
import sridharimg from '../assets/profiles/sridhar.jpg';
import himanshuimg from '../assets/profiles/himanshu.jpg';

const About= () => {
    return (
      <>
      <div className='main_about_us'>
        <header className="about_us_header">
          <div className="about_us_head_div">
            <div className="about_us_logo_main">
              <img className="about_us_logo" src={logo} alt="logo" />
            </div>
            <div className="about_us_heading_div">
              <h1>ProjectHive</h1>
              <p className="about_us_slogan">Upload.React.Improve</p>
            </div>
          </div>
        </header>
        <hr />
  
      <div className='main_about_us'>
        <div className="about_us_person">
          <div className="about_us_container">
            <div className="about_us_container-inner">
              <img className="about_us_img1" src={satvikImg} alt="logo" />
            </div>
          </div>
          <div className="about_us_divider"></div>
          <div className="about_us_name">SATVIK GARG</div>
          <div className="about_us_title"> Frontend Developer</div>
        </div>
  
        <div className="about_us_person">
          <div className="about_us_container">
            <div className="about_us_container-inner">
              <img className="about_us_img2" src={himanshuimg} alt="user" />
            </div>
          </div>
          <div className="about_us_divider"></div>
          <div className="about_us_name">HIMANSHU SHARMA</div>
          <div className="about_us_title">Backend Developer</div>
        </div>
  
        <div className="about_us_person">
          <div className="about_us_container">
            <div className="about_us_container-inner">
              <img className="about_us_img3" src={sridharimg} alt="logo" />
            </div>
          </div>
          <div className="about_us_divider"></div>
          <div className="about_us_name">SNS SRIDHAR</div>
          <div className="about_us_title">Backend Developer</div>
        </div>
  
        <div className="about_us_person">
          <div className="about_us_container">
            <div className="about_us_container-inner">
              <img className="about_us_img4" src={ramanujanimg} alt="logo" />
            </div>
          </div>
          <div className="about_us_divider"></div>
          <div className="about_us_name">RAMANUJAN</div>
          <div className="about_us_title">Frontend Developer</div>
        </div>
  
        <div className="about_us_person">
          <div className="about_us_container">
            <div className="about_us_container-inner">
              <img className="about_us_img5" src={shreyashimg} alt="logo" />
            </div>
          </div>
          <div className="about_us_divider"></div>
          <div className="about_us_name">SHREYASH</div>
          <div className="about_us_title">Backend Developer</div>
        </div>
  
        <div className="about_us_person">
          <div className="about_us_container">
            <div className="about_us_container-inner">
              <img className="about_us_img5" src={tharunimg} alt="logo" />
            </div>
          </div>
          <div className="about_us_divider"></div>
          <div className="about_us_name">THARUN</div>
          <div className="about_us_title">Frontend Developer</div>
        </div>
        </div>
        </div>
    
    </>
)
}
  
export default About