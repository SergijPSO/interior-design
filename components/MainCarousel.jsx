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
          src='assets/images/main-carousel/01.jpg'
          alt='slide1'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/02.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/03.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/04.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/05.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/06.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/07.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/08.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/09.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/10.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/11.jpg'
        />
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/12.jpg'
        />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
