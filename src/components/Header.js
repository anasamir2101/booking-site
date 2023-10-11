import React, { useState } from 'react';
import Login from './Modal/Login';
import Signup from './Modal/Signup';
import Help from './Modal/Help';
import { HiBars3 } from 'react-icons/hi2';
import logo from '../assets/logo.png';

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };
  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setHelpModalOpen(false);
  };
  return (
    <>
      <div className=' text-center bg-[#1476D1] text-white text-[15px] py-1 z-20 fixed top-0 left-0 right-0 '>
        Become a member of <span className='font-bold'>Bookme</span> and get
        special services.
        <a href='/subscribe' className='font-bold underline'>
          Subscribe Now
        </a>
      </div>
      <div className='temporary-box'></div>
      <nav
        className=' mt-8 flex justify-between pt-4 pb-4 border-b-2 z-10'
        id='navbar-fixed'
      >
        <div className='flex items-center gap-3 pl-5 '>
          <HiBars3 size={35} className='cursor-pointer mb-2' />
          <img
            src={logo}
            alt='Logo'
            srcset=''
            className='h-[48px] cursor-pointer '
          />
        </div>
        <div className='flex items-center gap-3 pr-3 text-sm'>
          <button
            onClick={openHelpModal}
            className='text-[#667085] mx-2 hover:text-blue-500'
          >
            Help
          </button>
          <button
            onClick={openLoginModal}
            className='text-[#667085] mx-2 hover:text-blue-500'
          >
            Log in
          </button>
          <button
            onClick={openSignupModal}
            className='text-white mx-2 text-sm  bg-[#1476D1]  rounded-lg px-5 py-2.5 hover:bg-blue-500'
          >
            Sign up
          </button>
          <Help isOpen={isHelpModalOpen} onClose={closeHelpModal} />
          <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
          <Signup isOpen={isSignupModalOpen} onClose={closeSignupModal} />
        </div>
      </nav>
    </>
  );
};

export default Header;
