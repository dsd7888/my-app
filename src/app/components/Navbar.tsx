"use client"
import React from 'react';
import heroImage from './heroImage.jpg';

const Navbar = () => {
  return (
    <>
    
     <div className=' h-screen bg-yellow-300'>

      <div className="flex flex-col  text-center lg:mt-24 pt-10">
        <span className="lg:self-start lg:pl-96 font-bold mt-36 text-7xl ">THE &nbsp;</span>
        <span className="  lg:mL-12 lg:pL-12 font-bold text-7xl">SIMPLEST WAY</span>
        <div className="lg:self-start lg:pl-80 font-bold text-7xl flex">
          <span >TO PAY</span>
          <div className="hidden h-auto border border-white rounded-lg lg:flex w-52 ml-36">
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
              className="w-1/2 p-1 ml-auto"
            />
          </div>
        </div>
      </div>
      <span className="lg:self-start lg:pl-80 lg:mt-5 text-xl">Trusted by 12 million+ Indians</span>
    </div>
    
    </>
  );
};

export default Navbar;