import React from 'react';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Nav from './components/nav';
import PhotoGallery1 from './components/PhotoGallery1';
import Footer from './components/Footer';
import DotsList from './components/dotlist';
import Page4 from './components/page4';
import Page5 from './components/page5';

const Page = () => {
  return (
    <>
      <div className='overflow:hidden'>
        <div className='-mt-24'>
        <Nav />
        </div> 
        <div className="flex">
          <DotsList />
          <div className="flex-1 overflow:hidden">
            <Navbar />
            <PhotoGallery />
            <PhotoGallery1 />
            <Page4 />
            <Page5 />
            <Footer />

          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
