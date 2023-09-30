import React from 'react';
import Image from 'next/image';
import qr from '../assets/qr.webp';

const Page5 = () => {
  return (
    <>
    <div className=' bg-rgb-99-185-54'>
    <div className='text-white font-extrabold text-7xl text-center top-64 right-80 relative '> DOWNLOAD </div>
    <div className='text-white font-extrabold text-7xl text-center top-64 right-80 relative '> SLICE TO  </div>
    <div className='text-white font-extrabold text-7xl text-center top-64 right-80 relative '> GET STARTED
  </div>
    <div className='min-h-screen bg-rgb-99-185-54 '>
      <Image
        src={qr}
        alt="QR Code"
        width={400} // Set a smaller width value
        height={400} // Set a smaller height value
        layout="responsive"
        className="object-center"
      />
    </div>
    </div>
    </>
  );
};

export default Page5;
