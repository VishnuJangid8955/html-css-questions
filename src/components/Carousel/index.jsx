import { useMemo, useState } from "react";
import carouselImg1 from "../../Assets/images/image1.jpg";
import carouselImg2 from "../../Assets/images/image2.jpg";
import CarouselItem from "./CarouselItem";
import "./style.css";

const Carousel = () => {
  const data = useMemo(() => [
    {
      image: carouselImg1,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autporro quidem optio delectus minima nemo aperiam esse!",
    },
    {
      image: carouselImg2,
      text: "Aliquid, aut porro quidem optio delectus minima nemo aperiam esse! Nihil non necessitatibus sit dolorem voluptates suscipit autem quisquam, consequuntur assumenda repellendus!",
    },
    {
      image: carouselImg1,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: carouselImg2,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil non necessitatibus sit dolorem voluptates suscipit autem quisquam, consequuntur assumenda repellendus!",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDotClick = (e) => {
    setCurrentIndex(Number(e.target.id));
  };

  return (
    <div className="carousel">
      <CarouselItem item={data[currentIndex]} />
      <button onClick={handleLeftClick} className="btn btn-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button onClick={handleRightClick} className="btn btn-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div onClick={handleDotClick} className="dots">
        <button id="0" className={`dot ${currentIndex === 0 ? 'dot-active' : ''}`}>
          &nbsp;
        </button>
        <button id="1" className={`dot ${currentIndex === 1 ? 'dot-active' : ''}`}>
          &nbsp;
        </button>
        <button id="2" className={`dot ${currentIndex === 2 ? 'dot-active' : ''}`}>
          &nbsp;
        </button>
        <button id="3" className={`dot ${currentIndex === 3 ? 'dot-active' : ''}`}>
          &nbsp;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
