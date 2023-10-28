import React, { useRef } from 'react';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import "../assets/styles/contactus.css";
import Image from "../assets/image.jpg";
import emailjs from 'emailjs-com';

const Contact= () => {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sewt935',
            'template_admf0iw', form.current,
            'NqP37av-Xxj6QY9VZ')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <body>
            <form onSubmit={sendEmail} ref={form}>
                <div className="contact-container" >
                    <div className="item" style={{
                        width: '100%',
                        height: '550px',
                        maxWidth: '820px',
                        background: '#fff',
                        borderRadius: '20px',
                        boxShadow: '0 0 20px 10px rgba(0, 0, 0, .4)',
                        overflow: 'hidden',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        display: 'grid',
                        zIndex: 1000,

                    }}>
                        <div className="contact-contactt">
                            <div className="contact-first-text">Let's get in touch</div>
                            <img src={Image} alt="" className="contact-image" />
                            <div className="contact-socia-links">
                                <span className="contact-secnd-text">Connect with us:</span>
                                <ul className="contact-social-media">
                                    <li><a href="#" className='contactLi'><FaFacebookSquare /></a></li>
                                    <li><a href="#" className='contactLi'><FaTwitter /></a></li>
                                    <li><a href="#" className='contactLi'><FaYoutube /></a></li>
                                    <li><a href="#" className='contactLi'><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-submit-form">
                            <h4 className="contact-third-text">Contact Us</h4>
                            <div>
                                <div className="contact-input-box">
                                    <input type="text" className="contact-input" name="user_name" required style={{ borderRadius: '20px' }} />
                                    <label className='contactLabel'>Name</label>
                                </div>
                                <div className="contact-input-box">
                                    <input type="email" name="user_email" className="contact-input" required style={{ borderRadius: '30px' }} />
                                    <label className='contactLabel'>Email</label>
                                </div>
                                <div className="contact-input-box">
                                    <input type="tel" name="user_number" className="contact-input" required style={{ borderRadius: '30px' }} />
                                    <label className='contactLabel'>Phone</label>
                                </div>
                                <div className="contact-input-box">
                                    <textarea name="message" className="contact-input" required id="message" cols="30" rows="10" style={{ borderRadius: '30px' }}></textarea>
                                    <label className='contactLabel'>Message</label>
                                </div>
                                <input type="submit" className="contact-button" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </body>
    );
};

export default Contact;
