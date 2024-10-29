import { useState } from "react";
import cn from 'classnames';


const AccordionEvent = () => {
  const [showFirst, setShowFirst] = useState(false);
  const handleToggleFirst = () => setShowFirst(!showFirst);


  return (
    <section className='accordion-section border p-3 rounded-3'>
        <div className="accordion rounded-2 shadow">
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button onClick={handleToggleFirst} className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={showFirst} aria-controls="panelsStayOpen-collapseOne">
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
      </div>
    </section>
  )
};

export default AccordionEvent;
