import React from 'react';
import { TiPlane } from 'react-icons/ti';

const Flights = () => {
  return (
    <a href='/flights' className='flex items-center gap-4'>
      <TiPlane />
      <p>Flights</p>
    </a>
  );
};

export default Flights;
