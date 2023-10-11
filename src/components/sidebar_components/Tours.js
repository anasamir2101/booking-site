import React from 'react';
import { PiTreePalmLight } from 'react-icons/pi';

const Tours = () => {
  return (
    <a href='/tour' className='flex items-center gap-4'>
      <PiTreePalmLight />
      <p>Tour</p>
    </a>
  );
};

export default Tours;
