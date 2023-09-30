import React from 'react';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Nav from './components/Nav';
import PhotoGallery1 from './components/PhotoGallery1';
import Footer from './components/Footer';
import DotsList from './components/dotlist'; // Import the DotsList component

const Page = () => {
  return (
    <>
    <div>
      <div className="flex ">
        {/* Include DotsList on the left */}
        <DotsList />
        <div className="flex-1">
          <Navbar />
          <PhotoGallery />
          <PhotoGallery1 />
          <Footer />
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;
