import { Tab } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";
import ArrowedCarousel from "./ArrowedCarousel";
import useScreenWidth from "../hooks/useScreenWidth.js";
import designs from "../public/data/designs.json";

const GalleryTabs = ({ project }) => {
  const screenWidth = useScreenWidth();

  if (project !== undefined && project !== null && !project?.id) {
    return [];
  }

  return (
    <Tab.Group>
      <Tab.List>
        <div className='app__collection-tabs'>
          <Tab className='app__collection-tabs__item'>Реалізація</Tab>
          <Tab className='app__collection-tabs__item'>Візуалізація</Tab>
        </div>
      </Tab.List>

      <div className='app__collection-tabs__content'>
        <Tab.Panels>
          <Tab.Panel>
            <Carousel
              className='app__arrowed-carousel app__arrowed-carousel--dark app__collection-tabs__realization'
              showArrows={screenWidth >= 1024}
              showStatus={false}
              showThumbs={screenWidth >= 1024}
              thumbWidth={114}
              showIndicators={screenWidth <= 1024}
              dynamicHeight={true}
              emulateTouch={false}
              swipeable={true}
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
              {designs?.projects?.[project?.id]?.realization.map(
                (item,index) => (
                  <div
                    key={index}
                    className='app__collection-tabs__realization-item'
                  >
                    <img
                      alt='slide image'
                      className='app__collection-tabs__realization-image'
                      src={item}
                    />
                  </div>
                )
              )}
            </Carousel>
          </Tab.Panel>

          <Tab.Panel>
            <Carousel
              className='app__arrowed-carousel app__arrowed-carousel--dark app__collection-tabs__visualisation'
              showArrows={screenWidth >= 1024}
              showStatus={false}
              showThumbs={screenWidth >= 1024}
              thumbWidth={114}
              emulateTouch={false}
              showIndicators={screenWidth <= 1024}
              dynamicHeight={true}
              swipeable={false}
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
              {designs?.projects?.[project?.id]?.visualisation.map(
                (item, index) => (
                  <div
                    key={index}
                    className='app__collection-tabs__visualisation-item'
                  >
                    <img
                      alt='slide image'
                      className='app__collection-tabs__visualisation-image'
                      src={item}
                    />
                  </div>
                )
              )}
            </Carousel>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default GalleryTabs;
