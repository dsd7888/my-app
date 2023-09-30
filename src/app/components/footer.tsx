import React from 'react'
import { AiFillInstagram ,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook,AiOutlineCopyrightCircle} from 'react-icons/ai';
import {BiLogoVisa}from 'react-icons/bi';
const Footer = () => {
  return (
    <span className='grid max-w-screen h-96 grid-cols-2 px-5 py-10 mx-auto gap-y-12 gap-x-4 sm:grid-cols-4 sm:grid-rows-3 sm:gap-y-12 md:gap-x-2 bg-purple-500 '>
    <p className='col-span-1 row-span-1'><div className='text-xl font-bold'>GaragePreneurs Internet Pvt Ltd</div>  <div className='py-2 px-2'>Indiqube Ashford Park View, 1st Floor,
80 ft. Rd, Koramangala 3rd block,
Bengaluru - 560034

CIN U72900KA2015PTC080871</div><div className='py-2 text-xl font-bold'>Contact us</div>
<div className='py-1'>+91-8048329999</div><div>help@sliceit.com</div></p>
    <p className='col-span-1 row-span-1'><div className='text-xl font-bold px-5 '>Legal</div>
    <div className='text-xl  px-5 pt-4'>Privacy</div>
    <div className='text-xl  px-4 py-1'>Terms of Services</div>
    <div className='text-xl  px-4 py-1'>Disclaimer</div>
    <div className='text-xl  px-4 py-1'>Safety</div>
    <div className='text-xl  px-4 py-1'>Financing partners</div>
    <div className='text-xl  px-4 py-1'>Banking partners</div>
    <div className='text-xl  px-4 py-1'>Corporate Governance</div>
    </p>
    <p className='col-span-1 row-span-1'> 
    <div className='text-xl font-bold px-5'>Company</div>
    <div className='text-xl  px-5 py-2'>Careers</div>
    <div className='text-xl  px-4 py-1'>Help Center</div>
    <div className='text-xl  px-4 py-1'>Contact Us</div>
    <div className='text-xl  px-4 py-1'>Report Vulnerability</div>
    <div className='text-xl  px-4 py-1'>Press</div>
    </p>
    <p className='col-span-1 row-span-1'>
    <div className='text-xl font-bold px-5'>Connect with us</div>
    <div className='text-2xl  px-4 py-5 flex space-x-3 '><AiFillInstagram/><AiFillTwitterCircle/><AiFillLinkedin/><AiFillFacebook/></div>
    <div className='  px-5 flex py-8'><AiOutlineCopyrightCircle/>2023 GaragePreneurs Internet Pvt Ltd. All Rights Reserved.</div>
    <div className=' px-5'>256 Bit SSL Security</div>
    <div className=' px-5 text-5xl'><BiLogoVisa/></div>



    </p>
  </span>
  
  )
}

export default Footer