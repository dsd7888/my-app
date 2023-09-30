import React from 'react';

const Nav = () => {
  return (
    <nav className='flex justify-between text-center top-0  w-full fixed '>
      <div className='ml-3 text-5xl py-5 text-green-500  bg-opacity-50'>
        Slice
      </div>
      <div className='mr-3 text-green-500  py-5 mt-3'>HELP CENTER</div>
    </nav>
  );
};

export default Nav;
