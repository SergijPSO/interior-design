const About = () => {
  return (
    <div className='app__about' id='about'>
      <h2 className='app__about__title'>ПРО МЕНЕ:</h2>

      <div className='app__about__person'>
        <div className='app__about__person-photo'>
          <img
            src='assets/images/about/person.png'
            alt='designer photo'
            className='app__about__person-photo__img'
          />
        </div>

        <div className='app__about__person-info'>
          <p className='app__about__person-info__text'>
            Проєктування просторів для життя - захоплююча, надихаюча робота.
            Ціную кожен етап в процесі створення дизайн проєкту. Маю освіту
            дизайнера інтер’єру у Львівській національній академії мистецтв і
            два роки досвіду по професії.
          </p>

          <p className='app__about__person-info__text'>
            Моя мета - забезпечити клієнтам гармонійний простір, який відповідає
            їхнім потребам і стилю життя. Завжди прагну втілити ідеї та
            концепції, які створюють грамотні ергономічні рішення, використовую
            поєднання природних кольорів. Будь-який проєкт, незалежний від його
            розміру чи складності, розробляється з увагою до кожної деталі. Під
            час роботи завжди на зв’язку, щоб зробити процес створення
            максимально зручним та приємним для моїх клієнтів.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
