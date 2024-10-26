import { useState } from "react";
import cn from 'classnames';

const AccordionTop = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const handleToggleFirst = () => setShowFirst(!showFirst);
  const handleToggleSecond = () => setShowSecond(!showSecond)
  const handleToggleThird = () => setShowThird(!showThird)

  return (
    <section className='accordion-section mx-auto bg-info-subtle rounded-3' style={{ maxWidth: '800px' }}>
      <div className='accordion-container mx-auto p-3'>
        <div className="accordion shadow">
          <div className="accordion-item bg-info-subtle">
            <h2 className="accordion-header">
              <button onClick={handleToggleFirst} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={showFirst} aria-controls="panelsStayOpen-collapseOne">
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
          <div className="accordion-item bg-info-subtle">
            <h2 className="accordion-header">
              <button onClick={handleToggleSecond} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded={showSecond} aria-controls="panelsStayOpen-collapseTwo">
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
              <button onClick={handleToggleThird} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded={showThird} aria-controls="panelsStayOpen-collapseThree">
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
          <div className="accordion-item bg-info-subtle">
            <h2 className="accordion-header">
              <button onClick={handleToggleThird} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Аккордеонный элемент #4
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
          <div className="accordion-item bg-info-subtle">
            <h2 className="accordion-header">
              <button onClick={handleToggleThird} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Аккордеонный элемент #5
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
          <div className="accordion-item bg-info-subtle">
            <h2 className="accordion-header">
              <button onClick={handleToggleThird} className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Аккордеонный элемент #6
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
      </div>
    </section>
  )
};

export default AccordionTop;