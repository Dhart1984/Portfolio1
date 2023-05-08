import React, { useState, } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import image1 from '../images/Athlete1400x780.png'
import image2 from '../images/artist.jpg'
import image3 from '../images/Attorney1400x780.png'
import About from "./About";
import Projects from "./Projects";

function Home() {
  const slides = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group bg-slate-950'>

      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
        <div className='absolute text-2xl md:text-8xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <p className='tex-red-700'>
            Athlete
            Artist
            Attorney
            Software Engineer</p>

        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <About />
      <Projects />

    </div>
  )
}

export default Home;
