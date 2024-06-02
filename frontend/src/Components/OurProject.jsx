import React, { useState } from 'react';
import image1 from '../Assests/image.png';
import image2 from '../Assests/12.png';
import image3 from '../Assests/22.png';
import './Award.css'
const contents = [
  {
    index: 0,
    title: 'Genderless Kei – Japan’s Hot',
    text: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of',
    image: image1,
  },
  {
    index: 1,
    title: 'Better Strategy & Quality',
    text: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of',
    image: image2,
  },
  {
    index: 2,
    title: 'Genderless Kei – Japan’s Hot',
    text: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of',
    image: image3,
  },
];

const OurProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setHoveredIndex(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className='w-full text-center'>    
        <p className='text-red-500 font-semibold text-xl my-4'>OUR PROJECT</p>
        <p className='text-4xl font-bold'>WHY WE ARE BEST</p>
      </div>
      <div className='flex flex-wrap items-center justify-center mt-4 mb-2'>
        <img
          src={contents[currentIndex].image}
          alt='Switchable Content'
          className='w-96 h-96'
        />
        <div className='flex flex-col ml-6 w-80 h-96 card'>
          {contents.map((content, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`cursor-pointer p-2.5 bg-gray-100 text-black rounded-sm ${hoveredIndex === index ? 'bg-red-500 hover:shadow-lg' : ''}`}
              style={{ zIndex: hoveredIndex === index ? 1 : 'auto' }}
            >
            <div className='hover:text-white'>
              <div className="mb-2">
                <p className='font-semibold text-xl'>{content.title}</p>
                <p>{content.text}</p>
              </div>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProject;