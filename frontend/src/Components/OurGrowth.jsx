import React from 'react'
import heart from '../Assests/heart (2).svg';
import clock from '../Assests/clock.svg';
import path1 from '../Assests/Path2.svg';
import path2 from '../Assests/Path6.svg';

const OurGrowth = () => {
  return (
    <div className='bg-slate-50'>
      <div className='w-full text-center'>    
        <p className='text-pink-500 font-semibold text-xl pt-12 mb-2'>EXPERT GROWTHS</p>
        <p className='text-4xl font-bold'>OUR COMPANY GROWTH</p>
      </div>
      <div className='flex flex-wrap justify-center my-6 gap-6'>
        <div className='flex flex-col items-center p-4 bg-white w-60 border-solid mb-6 border-1 hover:shadow-lg'>
          <img src={heart} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-2xl'>199+</p>
          <p className='text-gray-600 text-sm text-center'>Staticfied Customers</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-white w-60 border-solid mb-6 border-1 hover:shadow-lg'>
          <img src={clock} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-2xl'>1591+</p>
          <p className='text-gray-600 text-sm text-center'>Days Of Operation</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-white w-60 border-solid mb-6 border-1 hover:shadow-lg'>
          <img src={path1} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-2xl'>283+</p>
          <p className='text-gray-600 text-sm text-center'>Complete Project</p>
        </div>
        <div className='flex flex-col items-center p-4 bg-white w-60 border-solid mb-6 border-1 hover:shadow-lg'>
          <img src={path2} alt='Clock' className='w-16 mb-4'/>
          <p className='font-semibold text-2xl'>75+</p>
          <p className='text-gray-600 text-sm text-center'>Win Awards</p>
        </div>
      </div>
    </div>
  )
}

export default OurGrowth
