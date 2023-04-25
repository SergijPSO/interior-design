import ArrowedCarousel from "./ArrowedCarousel";
import ArrowedCarouselItem from "./ArrowedCarouselItem";
import useScreenWidth from "../hooks/useScreenWidth.js";

const Services = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className='app__services' id='services'>
      <h2 className='app__services__title'>ПОСЛУГИ:</h2>

      <div className='app__services__info'>
        <div className='app__services__info-steps'>
          <span className='app__services__info-steps__label'>
            20 $ кв.м. Дизайн проєкт
          </span>

          <p className='app__services__info-steps__text'>
            Створення дизайн проєкту ділиться на наступні ключові етапи:
          </p>
          <p className='app__services__info-steps__text'>
            <span className='app__services__info-steps__number'>01</span>
            Виїзд на заміри приміщення.
            <br />
            Узгодження функціоналу кімнат та стилю інтер’єру.
            <br />
            Обговорення кольорів і матеріалів.
          </p>
          <p className='app__services__info-steps__text'>
            <span className='app__services__info-steps__number'>02</span>
            Створення обмірного плану, плану демонтажу перегородок.
            <br />
            Затвердження плану розташування меблів і обладнання.
            <br />
            Пропонується декілька варіантів кресленнь для різних кімнат.
            <br />
            <br />
            Після затвердження наступний етап - <br />
            креслення планів комунікацій.
          </p>

          <p className='app__services__info-steps__text'>
            <span className='app__services__info-steps__number'>03</span>
            План електрики - виводи точок освітлення,
            <br />
            розеток, вимикачів, електровиводів.
            <br />
            План виводів води.
            <br />
            Схема покриття підлоги.
            <br />
            План стелі.
          </p>

          <p className='app__services__info-steps__text'>
            <span className='app__services__info-steps__number'>04</span>
            Візуалізація кімнат.
            <br />
            Розгортки стін у кресленнях.
            <br />
            Видача проєкту у роздрукованному і цифровому вигляді.
            <br />
            Дистанційна допомога по підбору матеріалів і меблів.
            <br />
            Авторський нагляд, підбір і закупівля матеріалів 250$ в місяць.
          </p>

          <span className='app__services__info-steps__label'>
            10 $ кв.м. Технічний проєкт
          </span>

          <p className='app__services__info-steps__text'>
            01, 02, 03 етапи. <br /> Всі планувальні рішення, креслення без
            візуалізацій і розгорток стін.
          </p>
        </div>

        <div className='app__services__info-visualization'>
          <div className='app__services__info-visualization__plan'>
            <img
              src='assets/images/services/plan.png'
              alt='rooms planing'
              className='app__services__info-visualization__plan-image'
            />
          </div>

          <div className='app__services__info-visualization__styles'>
            <img
              src='assets/images/services/visual.png'
              alt='visualization'
              className='app__services__info-visualization__styles-image'
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
        <ArrowedCarouselItem imagUrl='services/01.jpg' />
        <ArrowedCarouselItem imagUrl='services/02.jpg' />
        <ArrowedCarouselItem imagUrl='services/03.jpg' />
        <ArrowedCarouselItem imagUrl='services/04.jpg' />
        <ArrowedCarouselItem imagUrl='services/05.jpg' />

      </ArrowedCarousel>
    </div>
  );
};

export default Services;
