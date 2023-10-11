import React from 'react';
import { RiMovieFill } from 'react-icons/ri';

const Movies = () => {
  return (
    <a href='/movies' className='flex items-center gap-4'>
      <RiMovieFill />
      <p>Movies</p>
    </a>
  );
};

export default Movies;
