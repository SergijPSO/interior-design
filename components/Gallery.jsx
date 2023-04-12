import ArrowedCarousel from "./ArrowedCarousel";
import ArrowedCarouselItem from "./ArrowedCarouselItem";

const Gallery = () => {
  return(
    <div className="app__gallery">
      <div className="app__gallery-tabs">
        <div className="app__gallery-tabs__item">Візуалізація</div>
        <div className="app__gallery-tabs__item">Реалізація</div>
      </div>
      <div className="app__gallery-content">
        <ArrowedCarousel
            class={"app__arrowed-carousel app__arrowed-carousel--dark"}
            status={false}
            thumbs={true}
            bullets={false}
          >
            <ArrowedCarouselItem imagUrl="main-carousel/slide-1.png"/>
            <ArrowedCarouselItem imagUrl="main-carousel/slide-2.png"/>
            <ArrowedCarouselItem imagUrl="main-carousel/slide-1.png"/>
            <ArrowedCarouselItem imagUrl="main-carousel/slide-2.png"/>
            <ArrowedCarouselItem imagUrl="main-carousel/slide-1.png"/>
            <ArrowedCarouselItem imagUrl="main-carousel/slide-2.png"/>
          </ArrowedCarousel>
      </div>
    </div>
  )
}

export default Gallery;