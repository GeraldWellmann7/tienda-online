import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from '../dataCarousel';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
return(
    <div className='container-carousel relative group '>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='carousel'
    ></div>
    {/* Left Arrow */}
    <div className='prev'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='next'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='slides'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
)
}