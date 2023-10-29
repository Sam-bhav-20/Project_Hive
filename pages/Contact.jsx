import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Landing/Navbar";
import "./contact.css";
import Video from "../assets/contact.mp4";
import ThreeDImg from "../assets/contact3d.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import validator from 'validator';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "@mui/material";

function WaveContainer() {


    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault(e);
        const name = formRef.current.user_name.value;
        const email = formRef.current.user_email.value;
        if (name.trim() === '' || !validator.isEmail(email)) {
            // alert('Please enter a valid name and email.');
            toast.error("Please enter a valid name and email.");
            return;
          }
        emailjs
            .sendForm(
                "service_7tvl0re",
                "template_ul0dq9n",
                formRef.current,
                "SS1kMdeoJVQKFNWm3"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            toast.success("Thankyou For Contacting Us, We have recieved your Mail");

    };
    return (
        <div className="main-container min-h-screen  w-screen h-screen flex flex-col justify-around items-center">
            <video
                src={Video}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover -z-50 absolute"
            />
            <Navbar/>
            <div className="mt-9 u-footer w-[100%] flex justify-center items-center h-[75%]">
                <div className="w-[70%] flex flex-row  h-[80%]">
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="h-full w-[70%] phutphut max-md:w-full rounded-2xl custom-shadow flex justify-center flex-col gap-3 items-center"
                    >
                        <div className="w-[40%] h-[10%] ">
                            <input
                                name="user_name"
                                type="text"
                                className="w-full h-full bg-transparent border-[1px] border-slate-500 focus:border-white text-slate-300 rounded-xl input_phutphut  focus:outline-none focus:border-none placeholder:text-slate-400 max-md:text-sm placeholder:text-center p-2 "
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="w-[40%] h-[10%]">
                            <input
                                name="user_email"
                                type="text"
                                className="w-full h-full text-slate-300 bg-transparent border-[1px] border-slate-500 focus:border-white rounded-xl input_phutphut focus:border-none p-2 max-md:text-sm focus:outline-none placeholder:text-slate-400 placeholder:text-center"
                                placeholder="Email ID"
                            />
                        </div>
                        <div className="w-[40%] h-[30%]">
                            <textarea
                                name="message"
                                type="text"
                                className="w-full h-full bg-transparent text-slate-300 p-2 border-[1px] border-slate-500 focus:border-white rounded-xl input_phutphut focus:border-none max-md:text-sm focus:outline-none resize-none placeholder:text-slate-400 placeholder:text-center"
                                placeholder="Type Your Mesaage Here"
                            />
                        </div>
                        <div className="w-[15%] h-[10%]">
                            <button
                                type="submit"
                                className="w-full h-full border-[1px] border-slate-500 rounded-xl input_phutphut focus:border-none text-center text-slate-500 focus:outline-none max-md:text-sm"
                            >
                                Submit
                            </button>

                        </div>
                    </form>
                    <div className="h-full flex justify-center items-center max-md:hidden w-[30%]">
                        <div className="w-full h-full flex flex-col justify-between items-center">
                            <div>
                                <span className="yukuy before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-600 relative inline-block">
                                    <span className="relative text-white">
                                        <h4 className="text-5xl font-Lilita">Contact Us</h4>
                                    </span>
                                </span>
                            </div>
                            <div>
                                <img src={ThreeDImg} alt="" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="o-footer w-full h-[25%] flex flex-col justify-end items-end">
                <div className="i-footer relative w-full bg-[rgba(248,255,213,0.1)] px-[20px] py-[50px] flex h-[100%] flex-col justify-center items-center gap-3 ">
                    <ul className="social-links relative flex justify-center items-center mx-[10px] my-[0px] flex-wrap">
                        <li className="list-none">
                            <Link to="#">
                                <FacebookIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <InstagramIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <LinkedInIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <TwitterIcon />
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-row gap-2">
                        <Link to="https://gmail.com" target="_blank">
                            <EmailIcon sx={{ color: "white" }} />
                        </Link>
                        <div className="flex justify-center items-center">
                            <h6 className="text-slate-400 text-sm hover:text-slate-50 cursor-pointer">
                                rishirohilla14gmail.com
                            </h6>
                        </div>
                    </div>
                    <div className="">
                        <h6 className="text-slate-400 text-sm hover:text-slate-50 cursor-pointer">
                            © 2023 ProjectHive. All rights reserved.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaveContainer;