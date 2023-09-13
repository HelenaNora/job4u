import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-10">
      <div className="accordion-header text-[#123C69]" onClick={toggleAccordion}>
        {title}
        <p className={`accordion-icon ${isOpen ? 'open' : ''} float-right`}>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus}  className='ms-5 text-sm text-[#123C69]'/>
        </p>
      </div>
      {isOpen && (
        <div className="accordion-content text-[.8rem] text-[#244365] mt-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
