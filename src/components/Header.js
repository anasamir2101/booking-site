import React from 'react';
import { HiBars3 } from 'react-icons/hi2';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <div className=' text-center bg-[#1476D1] text-white text-[13px] py-1.5'>
        Become a member of <span className='font-bold'>Bookme</span> and get
        special services.{' '}
        <a href='/subscribe' className='font-bold underline'>
          Subscribe Now
        </a>
      </div>
      <nav className='flex justify-between pt-2 pb-3 border-b border-gray-400'>
        <div className='flex items-center gap-3 pl-5 '>
          <HiBars3 size={30} className='cursor-pointer mb-2' />
          <img
            src={logo}
            alt='Logo'
            srcset=''
            className='h-[46px] cursor-pointer '
          />
        </div>
        <div className='flex items-center gap-3 pr-3 text-sm'>
          <a href='/help' className='text-[#667085] mx-2 hover:text-blue-500'>
            Help
          </a>
          <a href='/login' className='text-[#667085] mx-2 hover:text-blue-500'>
            Log in
          </a>
          <a
            href='/signup'
            className='text-white mx-2 text-sm  bg-[#1476D1]  rounded-lg px-5 py-2.5 hover:bg-blue-500'
          >
            Sign up
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
