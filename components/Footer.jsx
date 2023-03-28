
const Footer = () => {
  return(
    <footer className="app__footer">
      <div className="app__footer__wrapper">
        
        <div className="app__footer__messengers">
          <div className="app__footer__messengers-list">

            <span className="app__footer__messengers-list__item">
              <a href="tel:+380978159804" className="app__footer__messengers-list__item__link">
                <svg className="app__footer__messengers-list__icon app__footer__messengers-list__icon--phone">
                  <use xlinkHref="./assets/sprite.svg#phone"></use>
                </svg>
              </a>
            
            </span>

            <span className="app__footer__messengers-list__item">
              <a href="https://t.me/+380978159804"  className="app__footer__messengers-list__item__link">
                <svg className="app__footer__messengers-list__icon app__footer__messengers-list__icon--telegram">
                  <use xlinkHref="./assets/sprite.svg#telegram"></use>
                </svg>
              </a>
            </span>
            

            <span className="app__footer__messengers-list__item">
              <a href="viber://chat?number=+380978159804" className="app__footer__messengers-list__item__link">
                <svg className="app__footer__messengers-list__icon app__footer__messengers-list__icon--viber">
                  <use xlinkHref="./assets/sprite.svg#viber"></use>
                </svg>
              </a>
            </span>
            
          </div> 

          <a href="tel:+380978159804" className="app__footer__messengers__number">
            097 815 98 04
          </a>

        </div>

        <div className="app__footer__email">
          <a className="app__footer__email__link" href="mailto:arinakozlovska@gmail.com">
            <svg className="app__footer__email__icon">
              <use xlinkHref="./assets/sprite.svg#email"></use>
            </svg>
            arinakozlovska@gmail.com
          </a>
        </div>

        <div className="app__footer__instagram">

          <a className="app__footer__instagram__link" href="https://www.instagram.com/arina_kozlovska/" target="_blank">
            <svg className="app__footer__instagram__icon">
              <use xlinkHref="./assets/sprite.svg#instagram"></use>
            </svg>
            instagram.com/arina_kozlovska
          </a>

        </div>
      </div>
      
    </footer>
  )
}

export default Footer;