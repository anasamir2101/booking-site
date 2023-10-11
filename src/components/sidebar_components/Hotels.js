import React from 'react';
import { BsBuildingsFill } from 'react-icons/bs';

const Hotels = () => {
  return (
    <a href='/hotels' className='flex items-center gap-4'>
      <BsBuildingsFill />
      <p>Hotels</p>
    </a>
  );
};

export default Hotels;
