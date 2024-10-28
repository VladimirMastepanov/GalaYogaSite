import { useState } from 'react'
import cn from 'classnames';
import AccordionTop from './components/AccordionTop/AccordionTop.jsx';
import AccordionEvent from './components/AccordionEvent/AccordionEvent.jsx';
import CarouselEvent from './components/CarouselEvent/CarouselEvent.jsx';
import AccordionInfo from './components/AccordionInfo/AccordionInfo.jsx';
import BrakeLine from './components/BrakeLine/BrakeLine.jsx';



const App = () => {

  return (
    <>
      <header className='container  text-center my-4'>
        <div className='row p-3 justify-content-center'>
          <div className='col-12 p-4'>
            <img src="../public/avatar.jpg" className="rounded-circle" alt="avatar" />
          </div>
          <h4>H4</h4>
          <p>Йога. Барселона и онлайн. Ретриты.</p>
        </div>
      </header>

      <main className='container'>

        <section className='row justify-content-center mx-auto-section'>
          <div className='col-12 text-center'>
            <p> Чем я могу быть полезна</p>
          </div>
        </section>

        <AccordionTop />

        <section className='row justify-content-center mx-auto-section'>
          <div className='col-12 text-center my-3'>
            <p> События </p>
          </div>
        </section>

        <AccordionEvent />
        <CarouselEvent />

        <section className='row justify-content-center  mx-auto-section' >
          <div className='col-12 text-center'>
            <p> Ещё </p>
          </div>
          <div className='col-12 d-grid gap-5 p-0'>
            <button className='btn bg-secondary-subtle shadow' type='button'>Анкета для индивидуальных занятий</button>
            <button className='btn bg-secondary-subtle shadow' type='button'>Анкета предзаписи на ретрит</button>
          </div>
        </section>

        <BrakeLine />

        <section className='row justify-content-center mx-auto-section'>
          <div className='col-12 text-center my-0 p-0'>
            <h4> Обо мне </h4>
            <p>Мне 35 лет. С 24 лет практикую йогу.</p>
            <p>С 2019 года преподаю.</p>
          </div>
        </section>

        <AccordionInfo />

        <section className='row justify-content-center p-4 mx-auto-section'>
          <div className='col-12 text-center p-4'>
            <p>### Ещё одна карусель с фотками ###</p>
          </div>
        </section>

        <BrakeLine />

        <section className='row  justify-content-center my-5 mx-auto-section'>

          <button className='col-5 me-5 btn bg-secondary-subtle shadow' type='button'>Telegram</button>
          <button className='col-5  btn bg-secondary-subtle shadow' type='button'>WhatsApp</button>

        </section>



      </main>

      <footer className='container'>
        <div className='row p-3 justify-content-center'>
          <div className='col-12 text-center'>
            <p>made for fun</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
