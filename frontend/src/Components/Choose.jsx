import React from 'react';
import clock from '../Assests/1-1.svg';
import clock1 from '../Assests/2-1.svg';
import clock2 from '../Assests/3-1.svg';
import clock3 from '../Assests/4.svg';

const Choose = () => {
  return (
    <>
      <div className='w-full text-center'>    
        <p className='text-red-500 font-semibold text-xl my-4'>WHY CHOOSE US</p>
        <p className='text-4xl font-bold'>WHY WE ARE BEST</p>
      </div>
      <div className='flex flex-wrap justify-center my-6 gap-6'>
        <div className='flex flex-col items-center p-4 bg-white w-60'>
          <img src={clock} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-lg'>Clarified Vision & Target</p>
          <p className='text-gray-600 text-sm text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-white w-60'>
          <img src={clock1} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-lg'>High Performance</p>
          <p className='text-gray-600 text-sm text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-white w-60'>
          <img src={clock2} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-lg'>Maintain Security</p>
          <p className='text-gray-600 text-sm text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-white w-60'>
          <img src={clock3} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-lg'>Better Strategy & Quality</p>
          <p className='text-gray-600 text-sm text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
      </div>
    </>
  )
}

export default Choose;