import footer from '../styles/scss/footer.module.scss';

const Footer = () => {
  return(
    <footer className={footer['app-footer']}>
      <div className={footer['app-footer__wrapper']}>
        <div className={footer['app-footer__messengers']}>
          <div className={footer['app-footer__messengers-list']}>
            <span className={footer['app-footer__messengers-list__item']}>
              <svg className={footer['app-footer__messengers-list__icon--phone']}>
                <use xlinkHref={'./assets/sprite.svg#phone'}></use>
              </svg>
            </span>

            <span className={footer['app-footer__messengers-list__item']}>
              <svg className={footer['app-footer__messengers-list__icon--telegram']}>
                <use xlinkHref={'./assets/sprite.svg#telegram'}></use>
              </svg>
            </span>

            <span className={footer['app-footer__messengers-list__item']}>
              <svg className={footer['app-footer__messengers-list__icon--viber']}>
                <use xlinkHref={'./assets/sprite.svg#viber'}></use>
              </svg>
            </span>
            
          </div> 

          <a href="tel:+380978159804" className={footer['app-footer__messengers__number']}>
            097 815 98 04
          </a>

        </div>

        <div className={footer['app-footer__email']}>

          <svg className={footer['app-footer__email__icon']}>
            <use xlinkHref={'./assets/sprite.svg#email'}></use>
          </svg>

          <a className={footer['app-footer__email__link']} href="mailto:arinakozlovska@gmail.com">
            arinakozlovska@gmail.com
          </a>

        </div>

        <div className={footer['app-footer__instagram']}>
          
          <svg className={footer['app-footer__instagram__icon']}>
            <use xlinkHref={'./assets/sprite.svg#instagram'}></use>
          </svg>

          <a className={footer['app-footer__instagram__link']} href="https://www.instagram.com/arina_kozlovska/" target="_blank">
            instagram.com/arina_kozlovska
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer;