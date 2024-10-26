import { useState } from "react";
import cn from 'classnames';

const AccordionInfo = () => {
  const [showFirst, setShowFirst] = useState(false);
  const handleToggleFirst = () => setShowFirst(!showFirst);
  const [showSecond, setShowSecond] = useState(false);
  const handleToggleSecond = () => setShowSecond(!showSecond);


  return (
      <section className='accordion-container mx-auto' style={{ maxWidth: '800px' }}>
        <div className="accordion rounded-2 shadow">
          <div className="accordion-item bg-secondary-subtle border border-dark border-opacity-10">
            <h2 className="accordion-header">
              <button onClick={handleToggleFirst} className="accordion-button collapsed bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={showFirst} aria-controls="panelsStayOpen-collapseOne">
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
          <div className="accordion-item bg-secondary-subtle border border-dark border-opacity-10">
            <h2 className="accordion-header">
              <button onClick={handleToggleSecond} className="accordion-button collapsed bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={showSecond} aria-controls="panelsStayOpen-collapseOne">
                Аккордеонный элемент #2
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className={cn("accordion-collapse", "collapse", {
              show: showSecond
            })}>
              <div className="accordion-body">
                <strong>Это тело аккордеона 2 элемента.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
};

export default AccordionInfo;
