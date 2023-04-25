import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainCarousel = () => {
  return (
    <Carousel
      className='app__main-carousel'
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
    >
      <div className='app__main-carousel__item'>
        <img
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/slide-1.png'
          alt='slide1'
        />
        <a
          href='https://t.me/+380978159804'
          className='app__main-carousel__item-message'
        >
          <svg
            className='app__main-carousel__item-message__icon'
          >
            <use xlinkHref='./assets/sprite.svg#telegram'></use>
          </svg>
        </a>
      </div>
      <div className='app__main-carousel__item'>
        <img
          alt='slide image'
          className='app__main-carousel__item-image'
          src='assets/images/main-carousel/slide-2.png'
        />
        <a
          href='https://t.me/+380978159804'
          className='app__main-carousel__item-message'
        >
          <svg
            className='app__main-carousel__item-message__icon'
          >
            <use xlinkHref='./assets/sprite.svg#telegram'></use>
          </svg>
        </a>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
