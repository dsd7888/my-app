"use client"
import React from 'react';
import Carousel from './Carousel'; // Import your Carousel component

const Navbar = () => {
  return (
    <>
      <div className='relative h-screen bg-yellow-300 overflow-hidden'>
        <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
        
        </div>
        
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          {/* Header */}
          <header className='absolute top-0 left-0 right-0 bg-yellow flex justify-between'>
            <div className='ml-3 text-5xl text-green-500 py-3'>Slice</div>
            <div className='mr-3 text-green-500 mt-3'>HELP CENTER</div>
          </header>

          {/* Text Content */}
         <div className='whitespace-pre-wrap'><p className='text-white text-7xl font-extrabold mr-72'>THE</p>
         <p className='text-white text-7xl font-extrabold ml-64'>SIMPLEST WAY</p>
         <div className='flex absolute'>
        <p className='text-white text-7xl font-extrabold ml-44 relative'>TO PAY</p></div>
          <div className="lg:self-start lg:pl-80 font-bold text-7xl pb-12 relative">
            <div className="flex-1 h-auto border border-white rounded-lg lg:flex w-52 ml-36">
              <div className="flex flex-col items-center justify-center w-1/2 text-sm normal-case">
                <h3 className="text-base font-extrabold leading-4 text-center whitespace-pre">
                  Download
                </h3>
                <h3 className="text-base font-extrabold leading-4 text-center whitespace-pre">
                  slice now
                </h3>
              </div>
              <img
                src="https://res.cloudinary.com/slicepay/image/upload/c_scale,q_auto:best,w_95/v1680606286/website/sliceit-v2/webp/desktop/qr-code.webp"
                width="100%"
                height="100%"
                alt="Scan to download slice app"
                className="w-1/2 p-1 ml-auto "
              />
  </div>
  </div>
         </div>
         </div>
         </div>
     
    </>
  );
};

export default Navbar;
