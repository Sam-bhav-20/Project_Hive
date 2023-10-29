import React, { useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
// import Slider from "react-slick"; 
import Navbar from "../components/Landing/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "../assets/contact.mp4";
import SliderAbout from "./Slider_About.jsx";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Faqs from "./Faqs.jsx";

// import Cards from "./Cards";
function AboutUS() {
    useEffect(() => {
        window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
    }, []);
    // Configuration options for the slider
    const sliderSettings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop the slider
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
    };

    return (
        <div className="main-container h-screen overflow-y-scroll"> 

            <video
                src={Video}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover -z-50 fixed"
            />
            <Navbar/>
            <div className=" flex flex-col justify-center items-center">
                <div className="w-[50vw] First_About text-slate-200 h-[20vh] flex justify-center items-center font-Acme mt-[3.5rem]">
                    <TypeAnimation className="max-md:text-[0.8rem] text-4xl"
                        sequence={[
                            "Build Bridge Belong",
                            1000,
                            "Fostering Digital Creativity Worldwide",
                            1000,
                            "~Code-Catalysts",
                            1000,
                        ]}
                        wrapper="span"
                        speed={60}
                        style={{ display: "block" }}
                        repeat={Infinity}
                    />
                </div>
                <div className="w-[50vw] text-center mt-[6rem]">
                    <span className="span_textback before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-600 relative inline-block">
                        <span className="relative text-white">
                            <h4 className="max-md:text-2xl text-5xl font-Lilita">Reviews </h4>
                        </span>
                    </span>
                </div>
                <div className="h-[30vw] flex max-md:mt-[8.5rem] flex-col gap-10 justify-center items-center">
                    <div className="max-md:flex-col  flex flex-row gap-10">
                        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 w-[16rem]">
                            <div className="shrink-0 ">
                                <img className="h-12 w-[4rem] rounded-lg" src="https://i.insider.com/64c7a2c9048ff200190deaf5?width=1000&format=jpeg&auto=webp" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Elon Musk</div>
                                <p className="text-slate-500"><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></p>
                            </div>
                        </div>
                        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 w-[16rem]">
                            <div className="shrink-0 rounded-lg">
                                <img className="h-12 w-[4rem] rounded-lg" src="https://c.ndtvimg.com/2023-10/351d3hag_sundar-pichai_625x300_11_October_23.jpg" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black"><span>Sundar Pichai</span></div>
                                <p className="text-slate-500"><StarIcon /><StarIcon /><StarIcon /><StarIcon /></p>
                            </div>
                        </div>
                        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 w-[16rem]">
                            <div className="shrink-0 rounded-lg">
                                <img className="h-12 w-[4rem] rounded-lg" src="https://i.insider.com/651db8992ce014759e750408?width=700*" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Bill Gates</div>
                                <p className="text-slate-500"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></p>
                            </div>
                        </div>
                    </div>
                    <div className="max-md:hidden flex flex-row gap-10">
                        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 w-[16rem]">
                            <div className="shrink-0 rounded-lg">
                                <img className="h-12 w-[4rem] rounded-lg" src="https://etimg.etb2bimg.com/photo/85146670.cms" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Mark ZuckerBerg</div>
                                <p className="text-slate-500"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></p>
                            </div>
                        </div>
                        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 w-[16rem]">
                            <div className="shrink-0 rounded-lg">
                                <img className="h-12 w-[4rem] rounded-lg" src="https://media.cnn.com/api/v1/images/stellar/prod/230609034602-01-sam-altman-chatgpt-060923-restricted.jpg?c=original" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Sam Altman</div>
                                <p className="text-slate-500"><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></p>
                            </div>
                        </div>
                        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 w-[16rem]">
                            <div className="shrink-0 rounded-lg">
                                <img className="h-12 w-[4rem] rounded-lg" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-36708,resizemode-75,msid-102419071/news/new-updates/virat-kohli-concludes-west-indies-tour-in-style-returns-on-a-private-jet.jpg" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Virat Kohli</div>
                                <p className="text-slate-500"><StarIcon /><StarIcon /><StarIcon /><StarIcon /></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[50vw]! text-center mt-[8rem]">
                    <span className="span_textback before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-600 relative inline-block">
                        <span className="relative text-white">
                            <h4 className="max-md:text-2xl text-5xl font-Lilita">Our Team</h4>
                        </span>
                    </span>
                </div>
                <SliderAbout />
                <div className="w-[50vw]! flex justify-center items-center flex-col mt-[5rem]">
                    <div className="w-full! px-[88px]!">
                        {/* <h1 className="font-Paci text-white max-md:text-2xl text-4xl">FAQs</h1> */}
                        <span className="span_textback before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-600 relative inline-block">
                        <span className="relative text-white">
                            <h4 className="max-md:text-2xl text-5xl font-Lilita">FAQ's</h4>
                        </span>
                    </span>
                    </div>
                    <Faqs />
                </div>
            </div>
        </div>
    );
}
export default AboutUS;