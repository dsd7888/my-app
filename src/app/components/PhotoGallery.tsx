  "use client"
  import { useEffect, useState } from 'react';
  import Image from 'next/image';

  import Pho from '../assets/pho.jpg';
  import merge2 from '../assets/merge2.jpg';

  const PhotoGallery = () => {
    const [isOnSecondPage, setIsOnSecondPage] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 1000; // Adjust this value based on your design

        if (window.scrollY >= scrollThreshold) {
          setIsOnSecondPage(true);
        } else {
          setIsOnSecondPage(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
  <div className="scroll-container h-max bg-rgb-200-50-192 flex">
      <div className=" w-1/2 ">
      <div className="w-full h-full flex items-center justify-center">
        <div className='flex pr-96 '>
        <div className=' text-7xl  pb-96 pt-44 mb-96 pl-96 font-extrabold text-custom whitespace-pre-wrap  '><div className='flex'><p>ANOTHER</p> <p className='text-white ml-3'>UPI,</p></div> <div className='ml-32'><p className='-mt-10'>
              BUT THE</p> </div><div className='flex'><p className='-mt-10 ml-10 text-white'>RADDEST </p>  <p className='-mt-10 ml-10 text-white '>ONE</p></div><div className='text-white text-xl font-normal mt-3'><p>Free yourself from the noise with slice UPI. Just scan to pay or send money to friends in a jiffy!</p></div></div>
      
        </div>
        </div>
      </div>
      <div className="bg-rgb-200-50-192 flex flex-1 h-full pt-96">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={Pho}
            alt="my profile"
            width="100%" // Set width to 100% for responsiveness
            height="100%" // Set height to 100% for responsiveness
            layout="responsive"
            className="object-cover" // Apply object-cover class to zoom and maintain aspect ratio
          />
    </div>
  </div>

    
            </div>
    
    );
  };

  export default PhotoGallery;
