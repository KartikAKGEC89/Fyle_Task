import React, { useState } from 'react';
import './Award.css'
import Hero from '../Assests/hero.png';


const Award = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleContactUs() {
            alert('Form submitted successfully!');
  }

  return (
   <>
      {isModalOpen ? (
<div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center w-full">
        <div className="relative border border-gray-900/10 w-1/2 p-4">
          <span className="close m-2 cursor-pointer" onClick={handleCloseModal}>&times;</span>
          <p className="text-2xl font-semibold pt-4 pb-2 px-2 text-center">Talk to us</p>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="block w-full border-0 border-b-2 border-gray-300 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 mb-2"
            placeholder="Work email*"
              />
          <div className='flex'>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-4/5 border-0 border-b-2 border-gray-300 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 mb-2"
            placeholder="First Name*"
          />
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-4/5 border-0 border-b-2 border-gray-300 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm sm:leading-6 mb-2 ml-4"
            placeholder="Last Name*"
          />
          </div>
          <div className="relative flex items-start gap-x-3 mb-2">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-500">
                I agree to Fyle's terms and conditions, and provide consent to send me communication.
              </label>
            </div>
          </div>
          <button
            type="button"
            className="bg-red-500 text-white p-4 mt-6 w-full"
            onClick={handleContactUs}
          >
            CONTACT US
          </button>
        </div>
      </form>
    </div>
      ) : (
      <div  className='flex justify-center Hero'>
        <div className='pt-24 px-4'>
            <span className='text-2xl text-red-500 font-semibold'>AWARD WINNING</span>
            <p className='text-6xl font-bold pt-4'>DIGITAL MARKETING</p>
            <p className='text-6xl font-bold pb-6'>AGENCY</p>
            <p className='pre'>Morbi sed lacus nec risus finibus feugiat et</p>
            <p className='pre'>fermentum nibh. Pellentesque vitae ante at elit</p>
            <p className='pre'>fringilla ac at purus, Morbi sed lacus nec risus finibus</p>
            <p className='pre'>feugiat et fermentum</p>
            <button className='bg-red-500 text-white p-4 mt-6' onClick={handleOpenModal}>CONTACT US</button>
        </div>
        <div>
            <img src={Hero} alt='Main Pic'  className=' w-11/12 p-9'/>
        </div>
      </div>
      )}      
     </>
  )
}

export default Award
