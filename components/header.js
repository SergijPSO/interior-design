import header from '../styles/scss/header.module.scss';

const Header = () => {
  return(
    <header className={header['app-header']}>
      <nav className={header['app-navigation']}>

        <div className={header['app-navigation__logo']}>
          <span className={header['app-navigation__logo-name']}>Аріна Козловська</span>
          <span className={header['app-navigation__logo-position']}>дизайнер</span>
        </div>
      
        <ul className={header['app-navigation__list']}>
            <li className={header['app-navgation__item']}>
              <a className={header['app-navigation__item-link']} href="#">ПРОЄКТИ</a>
            </li>
            <li className={header['app-navgation__item']}>
              <a className={header['app-navigation__item-link']} href="#">ПОСЛУГИ</a>
            </li>
            <li className={header['app-navgation__item']}>
              <a className={header['app-navigation__item-link']} href="#">ПРО МЕНЕ</a>
            </li>
            <li className={header['app-navgation__item']}>
              <a className={header['app-navigation__item-link']} href="#">КОНТАКТИ</a>
            </li>
        </ul>

        <a className={header['app-navigation__phone']} href="tel:+380978159804">097 815 98 04</a>
      </nav>
    </header>
  )
}

export default Header;