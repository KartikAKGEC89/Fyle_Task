import React, { useState, useEffect } from 'react';
import image1 from '../Assests/12.png';
import image2 from '../Assests/22.png';
import image3 from '../Assests/32.png';
import image4 from '../Assests/12.png';
import image5 from '../Assests/22.png';
import image6 from '../Assests/32.png';
import './WhatWedo.css'

const WhatWedo = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className='flex justify-center flex-col'>
      <div className='flex flex-row justify-center textcontent'>
        <div className='pt-16'>
          <span className='text-3xl text-pink-700 font-semibold mr-96'>What we do</span>
          <p className='text-5xl font-bold pt-8 mr-96'>
            SERVICE PROVIDE
          </p>
          <p className='text-5xl font-bold mr-96'>
            FOR YOU
          </p>
        </div>
        <div className='pt-28 px-2'>
          <p className='pre'>Morbi sed lacus nec risus finibus feugiat et</p>
          <p className='pre'>fermentum nibh. Pellentesque vitae ante at elit</p>
          <p className='pre'>fringilla ac at purus, Morbi sed lacus nec risus finibus</p>
          <p className='pre'>feugiat et fermentum</p>
        </div>
      </div>

      <div className='mt-16 flex justify-center w-full mb-4'>
        <div className="slider relative w-4/5 overflow-hidden">
          <div
            className="slider-content flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide flex-shrink-0 w-1/3 flex justify-center items-center">
                <img src={image} alt={`slide ${index}`} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {images.slice(0, images.length / 2).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full mb-4 ${index === currentIndex ? 'bg-pink-700' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWedo;
