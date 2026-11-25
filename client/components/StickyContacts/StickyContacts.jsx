import { useState, useEffect } from "react";

const StickyContacts = () => {
  const [contacts, setContacts] = useState({
    phone: '+380978159804',
    viber: '+380978159804',
    telegram: '+380978159804',
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
          });
        }
      })
      .catch(err => console.error('Error fetching sticky contacts:', err));
  }, []);

  return ( 
    <ul className="app__sticky-contacts">
      <li className="app__sticky-contacts__item">
        <a href={`tel:${contacts.phone}`} className="app__sticky-contacts__item-link">
           <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#phone"></use>
          </svg>
        </a>
      </li>
      <li className="app__sticky-contacts__item">
        <a href={`viber://chat?number=${contacts.viber}`} className="app__sticky-contacts__item-link">
          <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#viber"></use>
          </svg>
        </a>
      </li>
      <li className="app__sticky-contacts__item">
        <a href={contacts.telegram.startsWith('http') ? contacts.telegram : `https://t.me/${contacts.telegram}`} className="app__sticky-contacts__item-link">
          <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#telegram"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default StickyContacts;
