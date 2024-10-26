import { useState } from "react";
import cn from 'classnames';

const CarouselEvent = () => {
  const [showFirst, setShowFirst] = useState(true)
  const [showSecond, setShowSecond] = useState(true)
  const [showThird, setShowThird] = useState(false);

  return (
    <section className='row justify-content-center' >

    <div id='carousel' className='carousel slide mx-auto my-3 p-0' style={{ maxWidth: '800px' }}>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carousel'
          data-bs-slide-to='0'
          className={cn('rounded-circle', 'mx-3', { 'active': showFirst })}
          aria-current={showFirst}
          aria-label="Slide 1" 
          style={{ width: '12px', height: '12px' }} />

        <button
          type='button'
          data-bs-target='#carousel'
          data-bs-slide-to='1'
          className={cn('rounded-circle', 'mx-3', { 'active': showSecond })}
          aria-current={showSecond}
          aria-label="Slide 2" 
          style={{ width: '12px', height: '12px' }} />

        <button
          type='button'
          data-bs-target='#carousel'
          data-bs-slide-to='2'
          className={cn('rounded-circle', 'mx-3', { 'active': showThird })}
          aria-current={showThird}
          aria-label="Slide 3"
          style={{ width: '12px', height: '12px' }} />

      </div>

      <div className='carousel-inner'>
        <div className={cn('carousel-item', { 'active': showFirst })}>
          <img src='../public/pic/s1.jpeg' className='d-block w-100' alt='холодец' />
        </div>
        <div className={cn('carousel-item', { 'active': showSecond })}>
          <img src='../public/pic/s2.jpeg' className='d-block w-100' alt='...' />
        </div>
        <div className={cn('carousel-item', { 'active': showThird })}>
          <img src='../public/pic/s3.jpeg' className='d-block w-100' alt='...' />
        </div>
      </div>

      <button className='carousel-control-prev' type='button' data-bs-target='#carousel' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Предидущий</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carousel' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Следующий</span>
      </button>

    </div>
    </section>
  )
};

export default CarouselEvent;
