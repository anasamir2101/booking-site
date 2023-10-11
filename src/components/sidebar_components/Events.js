import React from 'react';
import { GiMicrophone } from 'react-icons/gi';

const Events = () => {
  return (
    <a href='/events' className='flex items-center gap-4'>
      <GiMicrophone />
      <p>Events</p>
    </a>
  );
};

export default Events;
