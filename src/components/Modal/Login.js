import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../firebase';

Modal.setAppElement('#root');

const Login = ({ isOpen, onClose }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [button, setButton] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!values.email || !values.password) {
      setError('All fields are required!');
      return;
    }
    setError('');
    setButton(true);

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      setValues({ email: '', password: '' });

      setButton(false);
      navigate('/');
    } catch (error) {
      setButton(false);

      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        setError('Invalid email or password. Please try again.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please use a different email.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');
      } else {
        setError('An error occurred. Please try again later.');
        console.error(error);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='w-[420px] bg-white mx-auto p-4 my-32 rounded-md shadow-md shadow-black'
    >
      <div className='w-[300px] h-[400px] mx-auto '>
        <h1 className='text-3xl font-bold mb-4 text-center text-black'>
          Login
        </h1>
        <div className='mb-4 mt-10'>
          <label className='text-sm font-semibold'>Email:</label>
          <input
            className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline-white'
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-4'>
          <label className='text-sm font-semibold'>Password:</label>
          <input
            className='w-full px-3 py-2 border rounded-lg mt-2 focus:ring focus:ring-blue-500 outline outline-white'
            type='password'
            placeholder='Enter your password'
          />
        </div>
        <button className='bg-blue-600 text-white py-2 px-4 mt-8 rounded-lg hover:bg-blue-500 text-center w-full'>
          Login
        </button>
      </div>
    </Modal>
  );
};

export default Login;
