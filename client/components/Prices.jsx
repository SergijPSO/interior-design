import ArrowedCarousel from "./ArrowedCarousel";
import ArrowedCarouselItem from "./ArrowedCarouselItem";
import useScreenWidth from "../hooks/useScreenWidth.js";
import { useState, useEffect } from "react";

const Prices = () => {
  const screenWidth = useScreenWidth();
  const [prices, setPrices] = useState({
    designProject: '20 $ кв.м.',
    technicalProject: '10 $ кв.м.',
    authorSupervision: 'від 250$ в міс.'
  });

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    fetch(`${API_URL}/api/prices`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setPrices({
            designProject: data.designProject || '20 $ кв.м.',
            technicalProject: data.technicalProject || '10 $ кв.м.',
            authorSupervision: data.authorSupervision || 'від 250$ в міс.'
          });
        }
      })
      .catch(err => console.error('Error fetching prices:', err));
  }, []);

  return (
    <div className='app__prices' id='prices'>
      <h2 className='app__prices__title'>ВАРТІСТЬ:</h2>

      <div className='app__prices__list'>
        <div className='app__prices__designs-project'>
          <div className='app__prices__designs-project__description'>
            <h3 className='app__prices__designs-project__description__label'>
              {prices.designProject} Дизайн проєкт
            </h3>

            <p className='app__prices__designs-project__description-text'>
              Створення дизайн проєкту ділиться на наступні ключові етапи:
            </p>

            <p className='app__prices__designs-project__description-text'>
              <span className='app__prices__designs-project__description-number'>
                01
              </span>
              Виїзд на заміри приміщення.
              <br />
              Узгодження функціоналу кімнат та стилю інтер’єру.
              <br />
              Обговорення кольорів і матеріалів.
            </p>

            <p className='app__prices__designs-project__description-text'>
              <span className='app__prices__designs-project__description-number'>
                02
              </span>
              Створення обмірного плану.
              <br />
              Затвердження плану розташування меблів і обладнання.
              <br />
              Пропонується декілька варіантів креслень для різних кімнат.
              <br />
              <br />
              Після затвердження наступний етап - креслення планів комунікацій:

            </p>

            <p className='app__prices__designs-project__description-text'>
              <span className='app__prices__designs-project__description-number'>
                03
              </span>
              План демонтажу / монтажу елементів,
              <br />
              План електрики - виводи точок освітлення,
              <br />
              розеток, вимикачів, електровиводів.
              <br />
              План виводів води і сантехніки.
              <br />
              Схема покриття підлоги.
              <br/>
              План стелі, розміщення кондиціонерів.
            </p>

            <p className='app__prices__designs-project__description-text'>
              <span className='app__prices__designs-project__description-number'>
                04
              </span>
              Візуалізація кімнат.
              <br />
              Розгортки стін у кресленнях.
              <br />
              Видача проєкту у роздрукованному і цифровому вигляді.
              <br />
              Дистанційна допомога по підбору матеріалів і меблів.
            </p>
          </div>
          <div className='app__prices__designs-project__image-container'>
            <img
              src='/assets/images/prices/visual.jpg'
              alt='visualisation image'
              className='app__prices__designs-project__image'
            />
          </div>
        </div>

        <div className='app__prices__technical-project'>
          <div className='app__prices__technical-project__description'>
            <h3 className='app__prices__technical-project__description__label'>
              {prices.technicalProject} Технічний проєкт
            </h3>

            <p className='app__prices__technical-project__description-text'>
              <span className='app__prices__technical-project__description-number'>
                01
              </span>
              Виїзд на заміри приміщення.
              <br />
              Узгодження функціоналу кімнат.
            </p>

            <p className='app__prices__technical-project__description-text'>
              <span className='app__prices__technical-project__description-number'>
                02
              </span>
              Створення обмірного плану, плану демонтажу перегородок.
              <br />
              Затвердження плану розташування меблів і обладнання.
              <br />
              Пропонується декілька варіантів кресленнь для різних кімнат.
            </p>

            <p className='app__prices__technical-project__description-text'>
              <span className='app__prices__technical-project__description-number'>
                03
              </span>
              План демонтажу / монтажу елементів,
              <br />
              План електрики - виводи точок освітлення,
              <br />
              розеток, вимикачів, електровиводів.
              <br />
              План виводів води і сантехніки.
              <br />
              Схема покриття підлоги.
              <br/>
              План стелі, розміщення кондиціонерів.
              <br/>
              Розгортки стін у кресленнях.
              <br/>
              Видача проєкту у цифровому вигляді.
            </p>

            <div className='app__prices__author-supervision__description'>
              <h3 className='app__prices__author-supervision__description__label'>
                {prices.authorSupervision} Авторський нагляд, м.Львів:
              </h3>

              <p className='app__prices__author-supervision__description-text'>
                <span className='app__prices__author-supervision__description-number'>
                  {" "}
                </span>
                Виїзди в процесі ремонту, контроль роботи згідно проєкту.
                <br />
                Закупівля матеріалів.
              </p>
            </div>
          </div>

          <div className='app__prices__technical-project__image-container'>
            <img
              src='/assets/images/prices/technical.jpg'
              alt='technical plan image'
              className='app__prices__technical-project__image'
            />
          </div>
        </div>
      </div>

      <ArrowedCarousel
        class={"app__arrowed-carousel"}
        status={false}
        thumbs={false}
        arrows={screenWidth >= 1024}
        bullets={screenWidth <= 1024}
      >
        <ArrowedCarouselItem imagUrl='prices/1.jpg' />
        <ArrowedCarouselItem imagUrl='prices/2.jpg' />
        <ArrowedCarouselItem imagUrl='prices/3.jpg' />
        <ArrowedCarouselItem imagUrl='prices/4.jpg' />
      </ArrowedCarousel>
    </div>
  );
};

export default Prices;
