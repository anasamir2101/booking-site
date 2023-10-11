import React, { useState } from 'react';
import EventsData from '../../data/EventsData';
const Events = () => {
  return (
    <section className='w-full ml-[245px] mt-4 bg-white p-4'>
      <div className='flex items-center'>
        <div className='mr-48 ml-2'>
          <h1 className='font-bold text-3xl pb-4'>Events</h1>
          <p>Book the ticket of ongoing events</p>
        </div>
        <div className='flex items-center gap-2 ml-7'>
          <div className='ml-[12rem] text-sm mt-2 border-2 w-[12rem] px-2  py-[1.1rem] rounded-md focus-within:border-blue-600 relative'>
            <select
              name=''
              id=''
              className='w-full outline-none absolute inset-y-0 left-0 right-0 top-0 bottom-0 appearance-none bg-transparent'
            >
              <option value=''>All</option>
              <option value=''>Islamabad</option>
              <option value=''>Lahore</option>
              <option value=''>Karachi</option>
              <option value=''>Malam Jabba</option>
              <option value=''>Pir Chinasi</option>
            </select>
          </div>

          <div className='mt-2 border-2 w-[28rem] px-2 py-[0.35rem] rounded-md group focus-within:border-blue-600'>
            <input
              type='text'
              placeholder='Search'
              className='w-full outline-none'
            />
          </div>
        </div>
      </div>
      <section className='grid grid-cols-3 gap-x-36 gap-y-4 max-w-[1180px] mt-7 cursor-pointer '>
        {EventsData.map((event) => {
          const { id, text, img } = event;
          return (
            <article key={id} className=''>
              <div className=' w-full h-full box-border'>
                <div className='w-[425px] h-[420px] overflow-hidden rounded-lg'>
                  <img
                    src={img}
                    alt='tourimg'
                    className='w-full h-full rounded-lg  duration-300 ease-in-out hover:scale-105'
                  />
                </div>

                <div className=''>
                  <h3 className='text-lg mt-1  mb-2leading-6'>{text}</h3>
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
