import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TechniaclCarousel = () => {
  return (
    <div className="app__technical-carousel__wrapper">
      <Carousel className="app__technical-carousel"
        showStatus={false}
        showThumbs={false}  
      > 
        <div className="app__technical-carousel__item">
            <img className="app__technical-carousel__item-image" src="assets/images/technical-carousel/scheme.png" />
        </div>
        <div className="app__technical-carousel__item">
            <img className="app__technical-carousel__item-image" src="assets/images/technical-carousel/scheme.png" />
        </div>
        <div className="app__technical-carousel__item">
            <img className="app__technical-carousel__item-image" src="assets/images/technical-carousel/scheme.png" />
        </div>
        <div className="app__technical-carousel__item">
            <img className="app__technical-carousel__item-image" src="assets/images/technical-carousel/scheme.png" />
        </div>
      
      </Carousel>
    </div>

  )
}

export default TechniaclCarousel;