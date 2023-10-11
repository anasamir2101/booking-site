import React from 'react';
import { AiFillCar } from 'react-icons/ai';

const Car = () => {
  return (
    <a href='/car' className='flex items-center  gap-4'>
      <AiFillCar />
      <p>Car Rental</p>
    </a>
  );
};

export default Car;
