import { useEffect, useMemo, useState } from "react";
import "./style.css";

const Accordion = () => {
  const [active, setActive] = useState(false);
  const data = useMemo(() => [1, 2, 3, 4, 5], []);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
    if (activeIndex && activeIndex === index) {
      setActive((prev) => !prev);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    let timeId = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex > data.length - 1) {
          return 0;
        }

        return nextIndex;
      });

      if (!active) {
        setActive(true);
      }
    }, 5000);

    return () => {
      clearInterval(timeId);
    };
  }, [active, data.length]);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={() => handleActive(index)} className="accordion-header">
            <div>{item}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="accordion-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
