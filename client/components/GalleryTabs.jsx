import { Tab } from "@headlessui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowedCarousel from "./ArrowedCarousel";
import useScreenWidth from "../hooks/useScreenWidth.js";
import { useState, useEffect } from "react";

const GalleryTabs = ({ project }) => {
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (project !== undefined && project !== null && !project?.id) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  const visualisationImages = Array.isArray(project?.visualisation)
    ? project.visualisation.filter((item) => typeof item === 'string' && item.trim() !== '')
    : [];

  const realizationImages =
    project?.showRealization !== false && Array.isArray(project?.realization)
      ? project.realization.filter((item) => typeof item === 'string' && item.trim() !== '')
      : [];

  const hasVis = visualisationImages.length > 0;
  const hasReal = realizationImages.length > 0;

  if (!hasVis && !hasReal) {
    return null;
  }

  // Helper function to render carousel for images
  const renderCarousel = (images, className) => (
    <Carousel
      className={`app__arrowed-carousel app__arrowed-carousel--dark ${className}`}
      showArrows={screenWidth >= 1024}
      showStatus={false}
      showThumbs={screenWidth >= 1024}
      thumbWidth={114}
      showIndicators={screenWidth <= 1024}
      dynamicHeight={true}
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
      {images.map((item, index) => (
        <div key={index} className={`${className}-item`}>
          <img
            alt='slide image'
            className={`${className}-image`}
            src={item}
          />
        </div>
      ))}
    </Carousel>
  );

  // If both exist, show tabs
  if (hasVis && hasReal) {
    return (
      <Tab.Group>
        <Tab.List>
          <div className='app__collection-tabs'>
            <Tab className='app__collection-tabs__item'>Візуалізація</Tab>
            <Tab className='app__collection-tabs__item'>Реалізація</Tab>
          </div>
        </Tab.List>

        <div className='app__collection-tabs__content'>
          <Tab.Panels>
            <Tab.Panel>
              {renderCarousel(visualisationImages, 'app__collection-tabs__visualisation')}
            </Tab.Panel>
            <Tab.Panel>
              {renderCarousel(realizationImages, 'app__collection-tabs__realization')}
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    );
  }

  // If only visualisation exists
  if (hasVis) {
    return (
      <div className='app__collection-tabs__content'>
        {renderCarousel(visualisationImages, 'app__collection-tabs__visualisation')}
      </div>
    );
  }

  // If only realization exists
  if (hasReal) {
    return (
      <div className='app__collection-tabs__content'>
        {renderCarousel(realizationImages, 'app__collection-tabs__realization')}
      </div>
    );
  }

  return null;
};

export default GalleryTabs;
