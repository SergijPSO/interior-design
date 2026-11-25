import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";

const MainCarousel = () => {
  const [slides, setSlides] = useState([
    'assets/images/main-carousel/04.jpg',
    'assets/images/main-carousel/01.jpg',
    'assets/images/main-carousel/03.jpg',
    'assets/images/main-carousel/02.jpg',
    'assets/images/main-carousel/05.jpg',
    'assets/images/main-carousel/06.jpg',
    'assets/images/main-carousel/07.jpg',
    'assets/images/main-carousel/08.jpg',
    'assets/images/main-carousel/09.jpg',
    'assets/images/main-carousel/10.jpg',
    'assets/images/main-carousel/11.jpg',
    'assets/images/main-carousel/12.jpg',
  ]);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    fetch(`${API_URL}/api/content/mainBanner`)
      .then(res => {
        const ct = res.headers.get('content-type');
        if (res.ok && ct && ct.includes('application/json')) return res.json();
        return null;
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setSlides(data);
        }
      })
      .catch(err => console.error('Error fetching main banner:', err));
  }, []);

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
            role='button'
          />
        );
      }}
    >
      {slides.map((url, idx) => (
        <div key={idx} className='app__main-carousel__item'>
          <img
            className='app__main-carousel__item-image'
            src={url.startsWith('/') ? url : `/${url}`}
            alt={`slide${idx + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
