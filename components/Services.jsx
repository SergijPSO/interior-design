const Services = () => {
  return (
    <div className="app__services">

      <h2 className="app__services__title">
        ПОСЛУГИ:
      </h2>

      <div className="app__services__info">
        <div className="app__services__info-steps">

          <span className="app__services__info-steps__label">
            20 $ кв.м. Дизайн проєкт 
          </span>

          <p className="app__services__info-steps__text">
            Створення дизайн проєкту ділиться на наступні ключові етапи:
          </p>
          <p className="app__services__info-steps__text">
            <span className="app__services__info-steps__number">01</span>
            Виїзд на заміри приміщення.
            Узгодження функціоналу кімнат та стилю інтер’єру.
            Обговорення кольорів і матеріалів.
          </p>
          <p className="app__services__info-steps__text">
            <span className="app__services__info-steps__number">02</span> 
            Створення обмірного плану,
            плану демонтажу перегородок.
            Затвердження плану розташування меблів і обладнання. 
            Пропонується декілька варіантів кресленнь для різних кімнат. 
          </p>
          <p className="app__services__info-steps__text">
            Після затвердження наступний етап - 
            креслення планів комунікацій.
          </p>

          <p className="app__services__info-steps__text">
            <span className="app__services__info-steps__number">03</span>
            План електрики - виводи точок освітлення,
            розеток, вимикачів, електровиводів.
            План виводів води.
            Схема покриття підлоги.
            План стелі.
          </p>

          <p className="app__services__info-steps__text">
            <span className="app__services__info-steps__number">04</span>
            Візуалізація кімнат.
            Розгортки стін у кресленнях.
            Видача проєкту у роздрукованному і цифровому вигляді.
            Дистанційна допомога по підбору матеріалів і меблів.
            Авторський нагляд, підбір і закупівля матеріалів 250$ в місяць.
          </p>

          <span className="app__services__info-steps__label">
            10 $ кв.м. Технічний проєкт 
          </span>

          <p className="app__services__info-steps__text">
            01, 02, 03 етапи. Всі планувальні рішення, креслення без візуалізацій і розгорток стін.
          </p>

        </div>

        <div className="app__services__info-visualization">
          <div className="app__services__info-visualization__plan">
            <img src="assets/images/services/plan.png" alt="rooms planing" className="app__services__info-visualization__plan-image" />
          </div>

          <div className="app__services__info-visualization__styles">
            <img src="assets/images/services/visual.png" alt="visualization" className="app__services__info-visualization__styles-image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services;