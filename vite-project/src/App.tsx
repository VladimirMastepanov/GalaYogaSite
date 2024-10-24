import { useState } from 'react'
import cn from 'classnames';

const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
};

const AccordionTop = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const handleToggleFirst = () => setShowFirst(!showFirst);
  const handleToggleSecond = () => setShowSecond(!showSecond)
  const handleToggleThird = () => setShowThird(!showThird)

  return (
    <div className="accordion" id="accordionTop">
      <div className="accordion-item bg-info-subtle">
        <h2 className="accordion-header">
          <button onClick={handleToggleFirst} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            Аккордеонный элемент #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className={cn("accordion-collapse", "collapse", {
          show: showFirst
        })}>
          <div className="accordion-body">
            <strong>Это тело аккордеона первого элемента.</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item open bg-info-subtle">
        <h2 className="accordion-header">
          <button onClick={handleToggleSecond} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Аккордеонный элемент #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className={cn("accordion-collapse", "collapse", {
          show: showSecond
        })}>
          <div className="accordion-body">
            <strong>Это тело аккордеона второго элемента.</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-info-subtle">
        <h2 className="accordion-header">
          <button onClick={handleToggleThird} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Аккордеонный элемент #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className={cn("accordion-collapse", "collapse", {
          show: showThird
        })}>
          <div className="accordion-body">
            <strong>Это тело аккордеона третьего элемента.</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <div className='container  text-center'>
        <div className='row p-5 justify-content-center'>
          <div className='col-12 p-5'>
            <img src="../public/avatar.jpg" className="rounded-circle" alt="avatar" />
          </div>
          <h3>H1</h3>
          <h6>Йога. Барселона и онлайн. Ретриты.</h6>
        </div>
        <div className='row'>
          <p className='col-12'>Чем я могу быть полезна</p>
        </div>
        <div className='bg-info-subtle'>
        </div>
      </div>
      <div className=''>
        <div className='conteiner text-content '>
          <div className='row p-5 bg-info-subtle'>
            <AccordionTop />

          </div>
        </div>

      </div>

    </>
  )
}

export default App
