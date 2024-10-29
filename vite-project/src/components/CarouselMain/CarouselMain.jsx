import { useState } from "react";
import cn from 'classnames';
import './CarouselMain.css';

const CarouselMain = () => {
  const [active, setActive] = useState(0);

  const handlePrev = () => setActive((prev) => (prev - 1 + 3) % 3);
  const handleNext = () => setActive((prev) => (prev + 1) % 3);
  const handleIndicatorClick = (index) => setActive(index);

  return (
    <section className='row justify-content-center' >
      <div id='carousel' className='carousel slide' >

        <div className='carousel-indicators'>
          {[0, 1, 2].map((index) => (
            <button
            key={index}
            type='button'
            className={cn({ 'active': active === index })}
            aria-current={active === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)} />
          ))}
          
        </div>

        <div className='carousel-inner rounded-4'>
          <div className={cn('carousel-item', { 'active': active === 0 })}>
            <img src='../public/pic/carouselMain/b1.jpg' className='d-block w-100' alt='холодец' />
          </div>
          <div className={cn('carousel-item', { 'active': active === 1 })}>
            <img src='../public/pic/carouselMain/b2.jpg' className='d-block w-100' alt='...' />
          </div>
          <div className={cn('carousel-item', { 'active': active === 2 })}>
            <img src='../public/pic/carouselMain/b3.jpg' className='d-block w-100' alt='...' />
          </div>
        </div>

        <button className='carousel-control-prev' type='button' onClick={handlePrev}>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Предидущий</span>
        </button>
        <button className='carousel-control-next' type='button' onClick={handleNext}>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Следующий</span>
        </button>

      </div>
    </section>
  )
};

export default CarouselMain;