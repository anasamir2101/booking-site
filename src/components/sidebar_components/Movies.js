import React from 'react';
import MoviesData from '../../data/MoviesData';
const Events = () => {
  return (
    <section className='w-full ml-[245px] mt-6 bg-white p-4'>
      <div className='flex items-center'>
        <div className='mr-48'>
          <h1 className='font-bold text-3xl pb-4'>Movies</h1>
          <p>Book the ticket of ongoing movies</p>
        </div>

        <div className='mt-2 border-2 w-[24rem] ml-[23rem] px-2 py-[0.35rem] rounded-md group focus-within:border-blue-600'>
          <input
            type='text'
            placeholder='Search'
            className='w-full outline-none'
          />
        </div>
      </div>
      <section className='grid grid-cols-4 gap-6 max-w-[1180px] mt-9 cursor-pointer '>
        {MoviesData.map((movie) => {
          const { id, img, title, type } = movie;
          return (
            <article key={id} className=''>
              <div className=' w-full h-full box-border'>
                <div className='w-[285px] h-[450px] overflow-hidden rounded-lg'>
                  <img
                    src={img}
                    alt='tourimg'
                    className='w-full h-full rounded-lg  duration-300 ease-in-out hover:scale-105'
                  />
                </div>

                <div className=''>
                  <h3 className='text-lg mt-2 leading-6'>{title}</h3>
                  <p>{type}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Events;
