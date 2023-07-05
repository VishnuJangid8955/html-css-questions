import { useState } from "react";
import "./style.css";

const Accordion = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [activeIndex, setActiveIndex] = useState(null);


  const handleActive = (index) => {
    setActiveIndex(index);
    if(activeIndex && activeIndex === index) {
        setActive(!active);
    }
  }

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={()=> handleActive(index)} className="accordion-header">
            <div>{item}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div
            className={`accordion-body ${
              active && index === activeIndex && "show"
            }`}
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              sint eius ipsa reprehenderit ipsam est, facilis quaerat labore
              nulla soluta neque architecto deserunt, enim animi consequatur id!
              Dolorem, error ut.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
