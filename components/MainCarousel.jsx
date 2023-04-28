import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MainCarousel = () => {
  return (
    <Carousel
      className='app__main-carousel'
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      autoPlay={true}
      emulateTouch={true}
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
      <div className='app__main-carousel__item'>
        <img
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/slide-1.png'
          alt='slide1'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/slide-2.png'
        />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
