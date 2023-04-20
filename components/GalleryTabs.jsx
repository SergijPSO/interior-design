import { Tab } from "@headlessui/react";
import designs from "@/pages/api/designs" assert { type: "JSON" };
import { Carousel } from "react-responsive-carousel";
import ArrowedCarousel from "./ArrowedCarousel";

import useScreenWidth from "../hooks/useScreenWidth.js";

const GalleryTabs = () => {
  const screenWidth = useScreenWidth();

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
              thumbWidth={200}
              showIndicators={screenWidth <= 1024}
              dynamicHeight={false}
            >
              {designs.projects[0].realization.map((item, index) => (
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
              ))}
            </Carousel>
          </Tab.Panel>

          <Tab.Panel>
            <Carousel
              className='app__arrowed-carousel app__arrowed-carousel--dark app__collection-tabs__visualisation'
              showArrows={screenWidth >= 1024}
              showStatus={false}
              showThumbs={screenWidth >= 1024}
              thumbWidth={200}
              showIndicators={screenWidth <= 1024}
              dynamicHeight={false}
            >
              {designs.projects[0].visualisation.map((item, index) => (
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
              ))}
            </Carousel>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default GalleryTabs;
