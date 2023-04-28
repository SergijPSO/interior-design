import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ArrowedCarousel = (props) => {
  return (
    <div className='app__arrowed-carousel__wrapper'>
      <Carousel
        className={`${props.class}`}
        showStatus={props.status}
        showArrows={props.arrows}
        showIndicators={props.bullets}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={`ind ${isSelected ? "active" : ""}`}
              key={index}
              role="button"
            />
          );
        }}
      >
        {props.children}
      </Carousel>
    </div>
  );
};

export default ArrowedCarousel;
