import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Signup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='w-[420px] h-[70vh] bg-white mx-auto p-4 my-32 rounded-md shadow-md shadow-black'
    >
      <div className='w-[300px] h-[400px] mx-auto '>
        <h1 className='text-3xl font-bold mb-4 text-center text-black'>
          Signup
        </h1>
        <div className='mb-4 mt-4'>
          <label className='text-sm font-semibold'>Name:</label>
          <input
            className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-white'
            type='text'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4 mt-4'>
          <label className='text-sm font-semibold'>Email:</label>
          <input
            className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-white'
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-4 mt-4'>
          <label className='text-sm font-semibold'>Password:</label>
          <input
            className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline outline-white'
            type='password'
            placeholder='Enter your password'
          />
        </div>
        <button className='bg-blue-600 text-white py-2 px-4 mt-8 rounded-lg hover:bg-blue-500 text-center w-full'>
          Signup
        </button>
      </div>
    </Modal>
  );
};

export default Signup;
