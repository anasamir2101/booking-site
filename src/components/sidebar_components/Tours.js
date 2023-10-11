import React from 'react';
import TourData from '../../data/TourData';

const Tours = () => {
  return (
    <section className='w-full ml-[245px] mt-3 bg-white p-4'>
      <div className='flex items-center'>
        <div className='mr-48'>
          <h1 className='font-bold text-3xl pb-4'>Tours</h1>
          <p className='text-xl'>Book the ticket of ongoing tour.</p>
        </div>
        <div className='ml-[25rem] mt-2 border-2 w-[27rem] px-2 py-2 rounded-md group focus-within:border-blue-600'>
          <input
            type='text'
            placeholder='Search'
            className='w-full outline-none'
          />
        </div>
      </div>
      <section className='grid grid-cols-3 gap-y-7 gap-x-36 max-w-[1180px] mt-14 cursor-pointer '>
        {TourData.map((tour) => {
          const { id, desc, pack, price, img } = tour;
          return (
            <article key={id} className=''>
              <div className=' w-full h-full box-border'>
                <div className='w-[420px] h-[420px] overflow-hidden rounded-lg'>
                  <img
                    src={img}
                    alt='tourimg'
                    className='w-full h-full rounded-lg  duration-300 ease-in-out hover:scale-105'
                  />
                </div>

                <div className='w-[400px]'>
                  <h3 className='text-lg mt-2 leading-6'>{desc}</h3>
                  <div className='flex justify-between items-center'>
                    <h4 className='text-sm text-gray-500'>{pack}</h4>
                    <h4 className='text-blue-800 font-semibold'>{price}</h4>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Tours;
