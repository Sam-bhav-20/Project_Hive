import React from 'react'
import ReactDOM from "react-dom/client";
import Video from '../assets/contact.mp4'
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

import "./attach.css"
// import BackgroundVideo from './backgroundVid.js';
// 
const Attach = () => {
  return (
    <>
    {/* <BackgroundVideo/> */}
    <video
                src={Video}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover -z-50 fixed"
            />
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Experience />
    </Canvas>
    </>
  );
}

export default Attach