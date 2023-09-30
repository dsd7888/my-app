import React from 'react';

const DotsList = () => {
  return (
    <ul className="fixed left-16 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 ml-4">
      <li>
        <div className="w-2.5 h-2.5 text-white bg-white rounded-full cursor-pointer bg-transparent border " style={{ transform: 'none' }}></div>
      </li>
      <li>
        <div className="w-2.5 h-2.5 text-white bg-white border rounded-full cursor-pointer "></div>
      </li>
      <li>
        <div className="w-2.5 h-2.5 text-white bg-white border rounded-full cursor-pointer "></div>
      </li>
      <li>
        <div className="w-2.5 h-2.5 text-white bg-white border rounded-full cursor-pointer" style={{ transform: 'none' }}></div>
      </li>
      <li>
        <div className="w-2.5 h-2.5 text-white bg-white border rounded-full cursor-pointer"></div>
      </li>
    </ul>
  );
};

export default DotsList;
