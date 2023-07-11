import carouselImg from "../../Assets/images/image1.jpg";
import "./style.css";

const CarouselItem = ({ item }) => {
  return (
    <>
      <img src={item.image} alt="carousel" />
      <div className="carousel-item">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, aut
          porro quidem optio delectus minima nemo aperiam esse! Nihil non
          necessitatibus sit dolorem voluptates suscipit autem quisquam,
          consequuntur assumenda repellendus! {item.text}
        </p>
        <div>
          <p>Maria de Almeida</p>
          <p>Senior Software Engineer</p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
