import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MainCarousel = () => {
  return (
    <Carousel className='app__main-carousel'
      showArrows={false}
      showStatus={false}
      showThumbs={false}  
    > 
      <div className='app__main-carousel__item'>
          <img className='app__main-carousel__item-image'src="assets/images/main-carousel/slide-1.png" />
      </div>
      <div className='app__main-carousel__item'>
          <img className='app__main-carousel__item-image' src="assets/images/main-carousel/slide-2.png" />
      </div>
    </Carousel>
  )

}

export default MainCarousel;