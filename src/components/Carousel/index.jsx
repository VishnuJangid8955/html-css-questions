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
    </div>
  );
};

export default Carousel;
