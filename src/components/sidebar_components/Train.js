import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
const Train = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section className='w-full ml-[245px] mt-2 bg-blue-500 p-4 h-100vh'>
      <p className='text-white text-2xl font-bold pt-2'>Search for Train</p>
      <p className='text-white pt-2'>Find the best deals for your bus travel</p>
      <div className='flex gap-2 mt-6 mb-2'>
        <div className='bg-white w-[325px] h-10 rounded-md flex items-center gap-2 pl-2'>
          <div className='bg-white w-[325px] h-10 rounded-md flex items-center gap-2 pl-2'>
            <AiOutlineArrowUp className='' />

            <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
              <option value='' style={{ display: 'none' }}>
                Departure
              </option>
              <option value=''>Lahore</option>
              <option value=''>Karachi</option>
              <option value=''>Peshawar</option>
              <option value=''>Multan</option>
              <option value=''>Sargodha</option>
              <option value=''>Islamabad</option>
              <option value=''>Peshawar</option>
              <option value=''>Peshawar</option>
              <option value=''>Bahawalpur</option>
              <option value=''>Peshawar</option>
              <option value=''>Mianwali</option>
            </select>
          </div>
        </div>

        <div className='bg-white w-[325px] h-10 rounded-md flex items-center gap-2 pl-2'>
          <span className='mr-2'>
            <AiOutlineArrowDown />
          </span>
          <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
            <option value='' style={{ display: 'none' }}>
              Arrival
            </option>
            <option value=''>Lahore</option>
            <option value=''>Karachi</option>
            <option value=''>Peshawar</option>
            <option value=''>Multan</option>
            <option value=''>Sargodha</option>
            <option value=''>Islamabad</option>
            <option value=''>Peshawar</option>
            <option value=''>Peshawar</option>
            <option value=''>Bahawalpur</option>
            <option value=''>Peshawar</option>
            <option value=''>Mianwali</option>
          </select>
        </div>
        <div className='bg-white w-[325px] rounded-md flex items-center gap-4'>
          <span className='ml-2'>
            <BsCalendarDate />
          </span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat='dd/MM/yyyy'
            placeholderText='Date'
            className='outline-none border-none w-full  '
          />
        </div>
        <div className='bg-yellow-300 w-[200px] rounded-md flex items-center gap-2 justify-center text-white'>
          <span>
            <AiOutlineSearch />
          </span>
          Search
        </div>
      </div>
    </section>
  );
};

export default Train;
