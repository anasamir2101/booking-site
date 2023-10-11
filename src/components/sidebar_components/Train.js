import React from 'react';
import { PiTrainThin } from 'react-icons/pi';
const Train = () => {
  return (
    <a href='/train' className='flex items-center gap-4'>
      <PiTrainThin />
      <p>Train</p>
    </a>
  );
};

export default Train;
