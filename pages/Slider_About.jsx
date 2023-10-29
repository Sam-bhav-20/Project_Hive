import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider_About.css';
import Sambhav from "../assets/Sambhav.jpg"
import Rishi from "../assets/Rishi.jpg"
import Satvik from "../assets/Satvik.jpg"
import Chhavi from "../assets/Chhavi.jpg"

const testimonialsData = [
  {
    id: 1,
    name: 'RISHI ROHILLA',
    image: Rishi,
    text: 'Full-Stack Developer',
    text2: 'IIIT LUCKNOW',
  },
  {
    id: 2,
    name: 'Sambhav Singla',
    image: Sambhav,
    text: 'Full-Stack Developer',
    text2: 'IIIT LUCKNOW',
  },
  {
    id: 3,
    name: 'Satvik Garg',
    image: Satvik,
    text: 'Project Originator and Frontend Developer',
    text2: 'IIIT LUCKNOW',
  }, {
    id: 4,
    name: 'Chhavi Gupta',
    image:Chhavi,
    text: 'Project Advisor and Frontend Developer',
    text2: 'CHITKARA UNIVERSITY',
  }
  // Add more testimonial objects here
];

const SliderAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isAutomatic) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isAutomatic]);

  const handlePrev = () => {
    // setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    setIsAutomatic(false);
  };

  const handleNext = () => {
    // setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1))
    setIsAutomatic(false);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay={isAutomatic}
              interval={3000}
              selectedItem={activeIndex}
              onChange={(index) => setActiveIndex(index)}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                  <div className="shadow-effect">
                    <img className="img-circle" src={testimonial.image} alt="" />
                    <div className="testimonial-name">{testimonial.name}</div>
                  </div>
                  <p><span className='font-semibold'>{testimonial.text} </span><br/>{testimonial.text2}</p>
                </div>
              ))}
            </Carousel>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderAbout;