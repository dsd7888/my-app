import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Pho from '../assets/Pho.webp';
import left from '../assets/left.webp'
import right from '../assets/right.webp';
import merge2 from '../assets/merge2.jpg'
const Carousel = () => {
  const images = [
    merge2,
    left,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const toggleAutoplay = () => {
    setAutoplay((prev) => !prev);
  };

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); 
    }

    return () => clearInterval(intervalId);
  }, [autoplay]);

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Use Next.js Image component to display images */}
        <Image
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          width={800} // Set the desired width
          height={800} // Set the desired height
          layout="responsive"
        />
      </div>
      <button
        onClick={toggleAutoplay}
        className="absolute bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full"
      >
        {autoplay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Carousel;
