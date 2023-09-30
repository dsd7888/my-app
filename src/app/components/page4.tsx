import React from 'react';
import left from '../assets/left.webp';
import Image from 'next/image';
import rickshaw from '../assets/rickshaw.jpg';
import card from '../assets/card.webp';

const Page4 = () => {
  return (
    <div className='h-1/4 overflow-hidden'>
      <div className="scroll-container bg-rgb-112-19-191">
        <div className='whitespace-pre-wrap '>
          <p className='text-white text-7xl pt-60 font-extrabold pl-44'>YOUR ACCOUNT</p>
          <p className='text-7xl font-extrabold pl-64 text-custom'>FOR EVERYDAY</p>
          <div className='flex'>
            <p className='text-7xl font-extrabold pl-48 pt-3 text-white'>PAYMENTS</p>
          </div>
          <p className='font-normal text-xl pl-36'>
            Pay via card or UPI and earn rewards.
          </p>
          <span className='font-normal text-xl pl-32'>
            &nbsp; Have all your expenses at one place with slice account.
          </span>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center pt-96 mt-10">
          <Image
            src={rickshaw}
            alt="Rickshaw"
            style={{ width: '100px', height: '100px' }}
            layout="responsive"
            className="object-center"
          />
        </div>

        <div className='right-0 top-1/2 transform -translate-y-1/2 pb-96 -mt-9'>
          <Image
            src={card}
            alt="Card"
            style={{ width: '1800px', height: '1800px' }}
            className="object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
