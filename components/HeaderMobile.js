import { useState } from 'react';
import headerMobile from '../styles/scss/header-mobile.module.scss';

const HeaderMobile = () => {

  const [isActive, setActive] = useState(false)

  const navToggle = () => {
    setActive(!isActive)
  }

  return(
    <div className={headerMobile['app__mobile']}>

      <header className={headerMobile['app__mobile-header']}>
        <div className={headerMobile['app__mobile-header__logo']}>
          <span className={headerMobile['app__mobile-header__logo-name']}>Аріна Козловська</span>
          <span className={headerMobile['app__mobile-header__logo-position']}>дизайнер</span>
        </div>
        
        <div onClick={navToggle} className={headerMobile['app__mobile-header__burger']}>
          <span className={headerMobile['app__mobile-header__burger-item']}></span>
          <span className={headerMobile['app__mobile-header__burger-item']}></span>
          <span className={headerMobile['app__mobile-header__burger-item']}></span>
        </div>
      </header>
    
      <nav className={isActive ? headerMobile['app__mobile-navigation--active'] : headerMobile['app__mobile-navigation']}>
        <a className={headerMobile['app__mobile-navigation__item']} href="#">ПРОЄКТИ</a>
        <a className={headerMobile['app__mobile-navigation__item']} href="#">ПОСЛУГИ</a>
        <a className={headerMobile['app__mobile-navigation__item']} href="#">ПРО МЕНЕ</a>
        <a className={headerMobile['app__mobile-navigation__item']} href="#">КОНТАКТИ</a>
        <a className={headerMobile['app__mobile-navigation__item']} href="tel:+380978159804">097 815 98 04</a>
      </nav>

    </div>
  )
}

export default HeaderMobile;