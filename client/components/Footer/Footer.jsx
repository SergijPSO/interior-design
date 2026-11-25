import { useState, useEffect } from 'react';

const Footer = () => {
  const [contacts, setContacts] = useState({
    phone: '+380978159804',
    viber: '+380978159804',
    telegram: '+380978159804',
    email: 'arinakozlovska@gmail.com',
  });

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    fetch(`${API_URL}/api/content/about`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data) {
          setContacts({
            phone: data.phone || '+380978159804',
            viber: data.viber || '+380978159804',
            telegram: data.telegram || '+380978159804',
            email: data.email || 'arinakozlovska@gmail.com',
          });
        }
      })
      .catch(err => console.error('Error fetching footer contacts:', err));
  }, []);

  return (
    <footer className='app__footer'>
      <div className='app__footer__wrapper' id='contacts'>
        <div className='app__footer__messengers'>
          <div className='app__footer__messengers-list'>
            <span className='app__footer__messengers-list__item'>
              <a
                href={`tel:${contacts.phone}`}
                className='app__footer__messengers-list__item__link'
              >
                <svg className='app__footer__messengers-list__icon app__footer__messengers-list__icon--phone'>
                  <use xlinkHref='./assets/sprite.svg#phone'></use>
                </svg>
              </a>
            </span>

            <span className='app__footer__messengers-list__item'>
              <a
                href={contacts.telegram.startsWith('http') ? contacts.telegram : `https://t.me/${contacts.telegram}`}
                className='app__footer__messengers-list__item__link'
              >
                <svg className='app__footer__messengers-list__icon app__footer__messengers-list__icon--telegram'>
                  <use xlinkHref='./assets/sprite.svg#telegram'></use>
                </svg>
              </a>
            </span>

            <span className='app__footer__messengers-list__item'>
              <a
                href={`viber://chat?number=${contacts.viber}`}
                className='app__footer__messengers-list__item__link'
              >
                <svg className='app__footer__messengers-list__icon app__footer__messengers-list__icon--viber'>
                  <use xlinkHref='./assets/sprite.svg#viber'></use>
                </svg>
              </a>
            </span>
          </div>

          <a
            href={`tel:${contacts.phone}`}  
            className='app__footer__messengers__number'
          >
            {contacts.phone}
          </a>
        </div>

        <div className='app__footer__email'>
          <a
            className='app__footer__email__link'
            href={`mailto:${contacts.email}`}
          >
            <svg className='app__footer__email__icon'>
              <use xlinkHref='./assets/sprite.svg#email'></use>
            </svg>
            {contacts.email}
          </a>
        </div>
      </div>
      <div className="app__footer__copyright">
        <span className="app__footer__copyright__text">
        arinakozlovska &copy; 2023 Всі права захищено
        </span>
      </div>
    </footer>
  );
};

export default Footer;
