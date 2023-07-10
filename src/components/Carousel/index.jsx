import carouselImg from "../../Assets/images/image.jpg";
import "./style.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <img src={carouselImg} alt="carousel" />
      <div className="carousel-item">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, aut
          porro quidem optio delectus minima nemo aperiam esse! Nihil non
          necessitatibus sit dolorem voluptates suscipit autem quisquam,
          consequuntur assumenda repellendus!
        </p>
        <div>
          <p>Maria de Almeida</p>
          <p>Senior Software Engineer</p>
        </div>
      </div>
      <button className="btn btn-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="btn btn-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="dots">
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
      </div>
    </div>
  );
};

export default Carousel;
