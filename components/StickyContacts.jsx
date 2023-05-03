const StickyContacts = () => {

  return ( 
    <ul className="app__sticky-contacts">
      <li className="app__sticky-contacts__item">
        <a href="https://www.instagram.com/arina_kozlovska/" className="app__sticky-contacts__item-link">
          <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#instagram"></use>
          </svg>
        </a>
      </li>
      <li className="app__sticky-contacts__item">
        <a href="tel:+380978159804" className="app__sticky-contacts__item-link">
           <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#phone"></use>
          </svg>
        </a>
      </li>
      <li className="app__sticky-contacts__item">
        <a href="viber://chat?number=+380978159804/" className="app__sticky-contacts__item-link">
          <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#viber"></use>
          </svg>
        </a>
      </li>
      <li className="app__sticky-contacts__item">
        <a href="https://t.me/+380978159804"  className="app__sticky-contacts__item-link">
          <svg className="app__sticky-contacts__item-icon">
            <use xlinkHref="../assets/sprite.svg#telegram"></use>
          </svg>
        </a>
      </li>
    </ul>
  )
}

export default StickyContacts;
