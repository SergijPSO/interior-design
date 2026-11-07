import { useState, useEffect } from 'react';

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

const About = () => {
  const [about, setAbout] = useState({
    title: 'ПРО МЕНЕ:',
    text: 'Проєктування просторів для життя - захоплююча, надихаюча робота. Ціную кожен етап в процесі створення дизайн проєкту від планувальних креслень до реалізації ідей. Маю освіту дизайнера інтер’єру у Львівській національній академії мистецтв і два роки досвіду по професії.\n\nМоя мета - забезпечити клієнтам гармонійний простір, який відповідає їхнім потребам і стилю життя. Завжди прагну втілити ідеї та концепції, які створюють грамотні ергономічні рішення, використовую поєднання природних кольорів. Будь-який проєкт, незалежний від його розміру чи складності, розробляється з увагою до кожної деталі. Під час роботи завжди на зв’язку, щоб зробити процес створення максимально зручним та приємним для моїх клієнтів.',
    photo: '/assets/images/about/person.png',
    titleStyle: null,
    textStyle: null,
  });

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    fetch(`${API_URL}/api/content/about`)
      .then(res => {
        const ct = res.headers.get('content-type');
        if (res.ok && ct && ct.includes('application/json')) return res.json();
        return null;
      })
      .then(data => {
        if (data && (data.text || data.text1)) {
          if (!data.text && (data.text1 || data.text2)) {
            data.text = [data.text1, data.text2].filter(Boolean).join('\n\n');
          }
          setAbout(data);
        }
      })
      .catch(err => console.error('Error fetching about content:', err));
  }, []);

  const paragraphs = about.text
    ? about.text.split('\n\n').filter(Boolean)
    : [about.text1, about.text2].filter(Boolean);

  return (
    <div className='app__about' id='about'>
      <h2 className='app__about__title' style={getTextStyle(about.titleStyle)}>{about.title || 'ПРО МЕНЕ:'}</h2>

      <div className='app__about__person'>
        <div className='app__about__person-photo'>
          <img
            src={about.photo || '/assets/images/about/person.png'}
            alt='designer photo'
            className='app__about__person-photo__img'
          />
        </div>

        <div className='app__about__person-info'>
          {paragraphs.map((para, idx) => (
            <p key={idx} className='app__about__person-info__text' style={{ ...getTextStyle(about.textStyle), whiteSpace: 'pre-line' }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
