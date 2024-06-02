import React from 'react';
import './WhatWedo.css';
import group from '../Assests/Group 500.png';

const FeedBack = () => {
  return (
    <>
      <div className='relative w-full text-center background'>
        <p className='text-red-500 font-semibold text-xl my-4'>CLIENT'S FEEDBACK</p>
        <p className='text-4xl font-bold'>PEOPLE SAY'S ABOUT US !</p>
        <p className='mt-16 text-xl font-medium'>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is</p>
        <p className='mb-4 text-xl font-medium'>reproduced below for those interested. Sections Bonorum et Malorum original.</p>
        <div className='flex justify-center items-center mb-24'>
          <span className='text-red-500 font-semibold text-xl mr-2'>JANNAT TUMPA</span>
          <p className='text-xl text-gray-400'>- COO, AMERIMAR ENTERPRISES, INC.</p>
        </div>
      </div>
      <div className='bg-red-500 flex flex-wrap justify-center items-center p-12'>
        <img src={group} alt='group' className='w-4/5' />
      </div>
    </>
  );
};

export default FeedBack;