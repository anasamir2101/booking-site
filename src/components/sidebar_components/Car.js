import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const Car = () => {
  const [oneWaySelected, setOneWaySelected] = useState(true);
  const [roundTripSelected, setRoundTripSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOneWayChange = () => {
    setOneWaySelected(true);
    setRoundTripSelected(false);
  };

  const handleRoundTripChange = () => {
    setOneWaySelected(false);
    setRoundTripSelected(true);
  };

  return (
    <>
      <section className='w-full ml-[245px] mt-[-2px] bg-blue-500 p-4'>
        <p className='text-white text-3xl font-bold pt-2'>Search for Cars</p>
        <p className='text-white pt-2'>
          Find the best and most affordable cars
        </p>
        <form>
          <div className='pt-4 text-sm flex items-center gap-4 pb-2'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                name='checkbox1'
                checked={oneWaySelected}
                onChange={handleOneWayChange}
                className='rounded-full mr-2 custom-checkbox'
              />
              <span className='text-white'>Within City</span>
            </label>

            <label className='flex items-center'>
              <input
                type='checkbox'
                name='checkbox2'
                checked={roundTripSelected}
                onChange={handleRoundTripChange}
                className='rounded-full mr-2 custom-checkbox'
              />
              <span className='text-white'>Out of City</span>
            </label>
          </div>

          {oneWaySelected && (
            <div className='flex gap-2 mt-6 mb-2'>
              <div className='bg-white w-[200px] h-10 rounded-md'>
                <div className='flex items-center justify-center'>
                  <div className=''>
                    <AiOutlineArrowUp />
                  </div>
                  <select
                    className='outline-none border-none w-full text-sm bg-transparent py-[-20px] bg-red-400'
                    name=''
                    id=''
                  >
                    <option value=''>City</option>
                    <option value=''>Road Master </option>
                    <option value=''>Al Makkah Presid</option>
                    <option value=''>Skyways -</option>
                    <option value=''>Daewoo Expres</option>
                    <option value=''>Bala Gujjar </option>
                    <option value=''>Shahid Coach -u</option>
                    <option value=''>Shaheen Express -</option>
                    <option value=''>Karachi Express</option>
                  </select>
                </div>
              </div>

              <div className='bg-white w-[245px] h-10 rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Departure</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>

              <div className='bg-white w-[245px] h-10 rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowDown />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Arrival</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>
              <div className='bg-white w-[220px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Departure Date'
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
          )}
          {roundTripSelected && (
            <div className='flex gap-2 mt-6 mb-2'>
              <div className='bg-white w-[195px] h-10 rounded-md  flex justify-center items-center'>
                <select
                  className='outline-none border-none w-full text-sm bg-transparent p-2.5   mr-2.5'
                  name=''
                  id=''
                >
                  <option value=''>All Bus Services</option>
                  <option value=''>Road Master - upto 40% off</option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                </select>
              </div>
              <div className='bg-white w-[195px] h-10 rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Departure</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>

              <div className='bg-white w-[195px] h-10 rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowDown />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Arrival</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>
              <div className='bg-white w-[195px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Departure Date'
                  className='outline-none border-none w-full  '
                />
              </div>
              <div className='bg-white w-[195px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Arrival Date'
                  className='outline-none border-none w-full  '
                />
              </div>
              <div className='bg-yellow-300 w-[180px] rounded-md flex items-center gap-2 justify-center text-white'>
                <span>
                  <AiOutlineSearch />
                </span>
                Search
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export default Car;
