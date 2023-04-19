/* eslint-disable @next/next/no-img-element */
import { Tab } from "@headlessui/react";
import ArrowedCarousel from "./ArrowedCarousel";
import ArrowedCarouselItem from "./ArrowedCarouselItem";
import designs from "@/pages/api/designs" assert { type: "JSON" };
import { Carousel } from "react-responsive-carousel";

const GalleryTabs = () => {
  console.log(designs);
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
              showArrows={true}
              showStatus={false}
              showThumbs={true}
              thumbWidth={200}
            >
              {designs.projects[0].realization.map((item, index) => (
                <div
                  key={index}
                  className='app__collection-tabs__realization-item'
                >
                  <img
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
              showArrows={true}
              showStatus={false}
              showThumbs={true}
              thumbWidth={200}
              showIndicators={false}
            >
              {designs.projects[0].visualisation.map((item, index) => (
                <div
                  key={index}
                  className='app__collection-tabs__visualisation-item'
                >
                  <img
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
