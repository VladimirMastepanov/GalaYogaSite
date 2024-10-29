import { useState } from 'react'
import cn from 'classnames';
import AccordionTop from './components/AccordionTop/AccordionTop.jsx';
import AccordionEvent from './components/AccordionEvent/AccordionEvent.jsx';
import CarouselEvent from './components/CarouselEvent/CarouselEvent.jsx';
import CarouselMain from './components/CarouselMain/CarouselMain.jsx'
import AccordionInfo from './components/AccordionInfo/AccordionInfo.jsx';


const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 m-4">
      {/* Общий контейнер с фиксированной шириной для всего контента */}
      <div className="container px-0" style={{ maxWidth: '800px' }}>

        <header className="py-5">
          <div className="text-center">
            <div className="mb-4">
              <img
                src="../public/avatar.jpg"
                className="rounded-circle"
                alt="avatar"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
            </div>
            <h4 className="mb-2">H4</h4>
            <p className="mb-0">Йога. Барселона и онлайн. Ретриты.</p>
          </div>
        </header>

        <main className="flex-grow-1">
          
          <section className="mb-5">
            <h2 className="text-center h4 mb-4">
              Чем я могу быть полезна
            </h2>
            <AccordionTop />
          </section>

          <section className="mb-5">
            <h2 className="text-center h4 mb-4">События</h2>
            <AccordionEvent />
            <div className="mt-4">
              <CarouselEvent />
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-center h4 mb-4">Ещё</h2>
            <div className="d-grid gap-3">
              <button className="btn bg-secondary-subtle shadow-sm py-3" type="button">
                Анкета для индивидуальных занятий
              </button>
              <button className="btn bg-secondary-subtle shadow-sm py-3" type="button">
                Анкета предзаписи на ретрит
              </button>
              <div className='my-3 block border'></div>
            </div>
          </section>

          <section className="mb-5">
            <div className="text-center mb-4">
              <h2 className="h4 mb-3">Обо мне</h2>
              <p className="mb-2">Мне 35 лет. С 24 лет практикую йогу.</p>
              <p className="mb-4">С 2019 года преподаю.</p>
            </div>
            <AccordionInfo />
          </section>

          <section className="mb-5 text-center">
            <div className="mt-4">
              <CarouselMain />
              <div className='my-3 block border'></div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row g-3 justify-content-center">
              <div className="col-6">
                <button className="btn shadow-sm w-100 py-0" type="button">
                  <img
                    src='../public/pic/icons/telegram.png'
                    alt='link to Telegram'
                    style={{ maxHeight: '35px' }}
                  />
                </button>
              </div>
              <div className="col-6">
                <button className="btn shadow-sm w-100 py-0" type="button">
                  <img
                    src='../public/pic/icons/whatsapp.png'
                    alt='link to WhatsApp'
                    style={{ maxHeight: '34px' }}
                  />
                </button>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row gap-5 justify-content-center">
              <div className="m-0 p-0 rounded-5" style={{ maxWidth: '60px' }}>
                <button className="btn rounded-5 w-100 p-0" type="button" >
                <img
                    src='../public/pic/icons/instagram.png'
                    alt='link to WhatsApp'
                    style={{ maxHeight: '60px' }}
                  />
                </button>
              </div>
              <div className="m-0 p-0" style={{ maxWidth: '60px' }}>
                <button className="btn w-100 rounded-5 p-0 " type="button" >
                <img
                    src='../public/pic/icons/youtube.png'
                    alt='link to WhatsApp'
                    style={{ maxHeight: '60px' }}
                  />
                </button>
              </div>
            </div>
          </section>

        </main>

        <footer className="py-4">
          <div className="text-center">
            <p className="mb-0">made for fun</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;
