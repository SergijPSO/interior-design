import ArrowedCarousel from "./ArrowedCarousel";
import ArrowedCarouselItem from "./ArrowedCarouselItem";
import useScreenWidth from "../hooks/useScreenWidth.js";
import { useState, useEffect } from "react";

const getTextStyle = (cfg) => {
  if (!cfg) return {};
  return {
    fontFamily: cfg.fontFamily ? `'${cfg.fontFamily}', sans-serif` : undefined,
    fontWeight: cfg.fontWeight || undefined,
    fontSize: cfg.fontSize || undefined,
    color: cfg.color || undefined,
    fontStyle: cfg.fontStyle || undefined,
  };
};

const Prices = () => {
  const screenWidth = useScreenWidth();
  const [prices, setPrices] = useState({
    designProject: '20 $ кв.м.',
    technicalProject: '10 $ кв.м.',
    authorSupervision: 'від 250$ в міс.',
    designPriceStyle: null,
    techPriceStyle: null,
    authorPriceStyle: null,
  });

  const [techBannerImages, setTechBannerImages] = useState([
    'prices/1.jpg',
    'prices/2.jpg',
    'prices/3.jpg',
    'prices/4.jpg',
  ]);

  const [designProjectData, setDesignProjectData] = useState({
    title: 'Дизайн проєкт',
    image: '/assets/images/prices/visual.jpg',
    steps: [
      'Виїзд на заміри приміщення. Узгодження функціоналу кімнат та стилю інтер’єру. Обговорення кольорів і матеріалів.',
      'Створення обмірного плану. Затвердження плану розташування меблів і обладнання. Пропонується декілька варіантів креслень для різних кімнат.',
      'План демонтажу / монтажу елементів, План електрики - виводи точок освітлення, розеток, вимикачів, електровиводів. План виводів води і сантехніки. Схема покриття підлоги. План стелі, розміщення кондиціонерів.',
      'Візуалізація кімнат. Розгортки стін у кресленнях. Видача проєкту у роздрукованному і цифровому вигляді.'
    ],
    titleStyle: null,
    stepStyle: null,
  });

  const [techProjectData, setTechProjectData] = useState({
    title: 'Технічний проєкт',
    image: '/assets/images/prices/technical.jpg',
    steps: [
      'Виїзд на заміри приміщення. Узгодження функціоналу кімнат.',
      'Створення обмірного плану, плану демонтажу перегородок. Затвердження плану розташування меблів і обладнання. Пропонується декілька варіантів кресленнь для різних кімнат.',
      'План демонтажу / монтажу елементів, План електрики - виводи точок освітлення, розеток, вимикачів, електровиводів. План виводів води і сантехніки. Схема покриття підлоги. План стелі, розміщення кондиціонерів. Розгортки стін у кресленнях. Видача проєкту у цифровому вигляді.'
    ],
    titleStyle: null,
    stepStyle: null,
  });

  const [authorSupervisionData, setAuthorSupervisionData] = useState({
    title: 'Авторський нагляд, м.Львів:',
    description: 'Виїзди в процесі ремонту, контроль роботи згідно проєкту. Закупівля матеріалів.',
    titleStyle: null,
    descStyle: null,
  });

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

    const safeFetch = async (url, setter) => {
      try {
        const res = await fetch(url);
        const ct = res.headers.get('content-type');
        if (res.ok && ct && ct.includes('application/json')) {
          const data = await res.json();
          if (data) setter(data);
        }
      } catch (err) {
        console.error(`Error fetching ${url}:`, err);
      }
    };

    safeFetch(`${API_URL}/api/prices`, (data) => {
      setPrices({
        designProject: data.designProject || '20 $ кв.м.',
        technicalProject: data.technicalProject || '10 $ кв.м.',
        authorSupervision: data.authorSupervision || 'від 250$ в міс.',
        designPriceStyle: data.designPriceStyle || null,
        techPriceStyle: data.techPriceStyle || null,
        authorPriceStyle: data.authorPriceStyle || null,
      });
    });

    safeFetch(`${API_URL}/api/content/techBanner`, (data) => {
      if (Array.isArray(data) && data.length > 0) setTechBannerImages(data);
    });

    safeFetch(`${API_URL}/api/content/designProject`, (data) => {
      if (data) {
        if (!Array.isArray(data.steps) && (data.text1 || data.text2)) {
          data.steps = [data.text1, data.text2, data.text3, data.text4].filter(Boolean);
        }
        setDesignProjectData(data);
      }
    });

    safeFetch(`${API_URL}/api/content/techProject`, (data) => {
      if (data) {
        if (!Array.isArray(data.steps) && (data.text1 || data.text2)) {
          data.steps = [data.text1, data.text2, data.text3].filter(Boolean);
        }
        setTechProjectData(data);
      }
    });

    safeFetch(`${API_URL}/api/content/authorSupervision`, (data) => {
      if (data && data.title) setAuthorSupervisionData(data);
    });
  }, []);

  const designSteps = Array.isArray(designProjectData.steps)
    ? designProjectData.steps
    : [designProjectData.text1, designProjectData.text2, designProjectData.text3, designProjectData.text4].filter(Boolean);

  const techSteps = Array.isArray(techProjectData.steps)
    ? techProjectData.steps
    : [techProjectData.text1, techProjectData.text2, techProjectData.text3].filter(Boolean);

  return (
    <div className='app__prices' id='prices'>
      <h2 className='app__prices__title'>ВАРТІСТЬ:</h2>

      <div className='app__prices__list'>
        <div className='app__prices__designs-project'>
          <div className='app__prices__designs-project__description'>
            <h3 className='app__prices__designs-project__description__label' style={getTextStyle(designProjectData.titleStyle)}>
              <span style={getTextStyle(designProjectData.titleStyle)}>{prices.designProject}</span> {designProjectData.title || 'Дизайн проєкт'}
            </h3>

            <p className='app__prices__designs-project__description-text'>
              Створення дизайн проєкту ділиться на наступні ключові етапи:
            </p>

            {designSteps.map((step, idx) => (
              <p key={idx} className='app__prices__designs-project__description-text' style={{ ...getTextStyle(designProjectData.stepStyle), whiteSpace: 'pre-line' }}>
                <span className='app__prices__designs-project__description-number'>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {step}
              </p>
            ))}
          </div>
          <div className='app__prices__designs-project__image-container'>
            <img
              src={designProjectData.image || '/assets/images/prices/visual.jpg'}
              alt='visualisation image'
              className='app__prices__designs-project__image'
            />
          </div>
        </div>

        <div className='app__prices__technical-project'>
          <div className='app__prices__technical-project__description'>
            <h3 className='app__prices__technical-project__description__label' style={getTextStyle(techProjectData.titleStyle)}>
              <span style={getTextStyle(techProjectData.titleStyle)}>{prices.technicalProject}</span> {techProjectData.title || 'Технічний проєкт'}
            </h3>

            {techSteps.map((step, idx) => (
              <p key={idx} className='app__prices__technical-project__description-text' style={{ ...getTextStyle(techProjectData.stepStyle), whiteSpace: 'pre-line' }}>
                <span className='app__prices__technical-project__description-number'>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {step}
              </p>
            ))}

            <div className='app__prices__author-supervision__description'>
              <h3 className='app__prices__author-supervision__description__label' style={getTextStyle(authorSupervisionData.titleStyle)}>
                <span style={getTextStyle(authorSupervisionData.titleStyle)}>{prices.authorSupervision}</span> {authorSupervisionData.title || 'Авторський нагляд, м.Львів:'}
              </h3>

              <p className='app__prices__author-supervision__description-text' style={{ ...getTextStyle(authorSupervisionData.descStyle), whiteSpace: 'pre-line' }}>
                <span className='app__prices__author-supervision__description-number'>
                  {" "}
                </span>
                {authorSupervisionData.description}
              </p>
            </div>
          </div>

          <div className='app__prices__technical-project__image-container'>
            <img
              src={techProjectData.image || '/assets/images/prices/technical.jpg'}
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
        {techBannerImages.map((imgUrl, idx) => (
          <ArrowedCarouselItem key={idx} imagUrl={imgUrl} />
        ))}
      </ArrowedCarousel>
    </div>
  );
};

export default Prices;
