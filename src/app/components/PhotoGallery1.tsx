import React from 'react';
import left from '../assets/left.webp';
import Image from 'next/image';
import right from '../assets/right.webp';
import bubbles from '../assets/bubbles.webp';
const PhotoGallery1 = () => {
  return (
    <div className="scroll-container h-max bg-rgb-243-198-88 relative">
      <div className='whitespace-pre-wrap absolute'>
        <p className='text-white text-7xl pt-60 font-extrabold pl-44'>BORROW</p>
        <p className='text-7xl font-extrabold pl-64 text-yellow-700'>EFFORTLESSLY,</p>
        <div className='flex'>
          <p className='text-7xl font-extrabold pl-36 pt-5 text-yellow-700'>REPAY</p>
          <p className='text-7xl font-extrabold pl-7 pt-5 text-white'>FLEXIBLY</p>
        </div>
        <p className='font-normal text-xl pl-36'>
          Get loans up to ₹5 lakh and repay flexibly across 12 months.
        </p>
        <span className='font-normal text-xl pl-32'>
          &nbsp; No interest is charged if paid in one month!
        </span>
      </div>
      <div className='absolute pt-80'><Image
          src={bubbles}
          alt="my profile"
          width={400} // Set the desired width
          height={400} // Set the desired height
          layout="responsive"
          className="object-center"
        /></div>
      <div className="w-full h-full flex items-center justify-center pt-32">
        <Image
          src={left}
          alt="my profile"
          width={400} // Set the desired width
          height={400} // Set the desired height
          layout="responsive"
          className="object-center"
        />
      </div>
    <div>
     
    </div>
      
      <div className='absolute right-0 top-1/2 transform -translate-y-1/2 pt-96'> {/* Center the "right" image within PhotoGallery1 */}
      <Image
          src={right}
          alt="my profile"
          style={{ width: '1800px', height: '1800px' }} // Increase the width and height for enlargement
          className="object-center "
        />
      </div>
    </div>
  );
};

export default PhotoGallery1;
