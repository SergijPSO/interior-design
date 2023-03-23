import { useState } from 'react';
// import headerMobile from '../styles/scss/header-mobile.module.scss';

const HeaderMobile = () => {
  const [isActive, setActive] = useState(false)

  const navToggle = () => {
    setActive(!isActive)
  }

  return(
    <div className={['app__mobile']}>

      <header className={['app__mobile-header']}>
        <div className={['app__mobile-header__logo']}>
          <span className={['app__mobile-header__logo-name']}>Аріна Козловська</span>
          <span className={['app__mobile-header__logo-position']}>дизайнер</span>
        </div>
        
        <div onClick={navToggle} className={['app__mobile-header__burger']}>
          <span className={['app__mobile-header__burger-item']}></span>
          <span className={['app__mobile-header__burger-item']}></span>
          <span className={['app__mobile-header__burger-item']}></span>
        </div>
      </header>
    
      <nav className={isActive ? ['app__mobile-navigation--active'] : ['app__mobile-navigation']}>
        <a className={['app__mobile-navigation__item']} href="#">ПРОЄКТИ</a>
        <a className={['app__mobile-navigation__item']} href="#">ПОСЛУГИ</a>
        <a className={['app__mobile-navigation__item']} href="#">ПРО МЕНЕ</a>
        <a className={['app__mobile-navigation__item']} href="#">КОНТАКТИ</a>
        <a className={['app__mobile-navigation__item']} href="tel:+380978159804">097 815 98 04</a>
      </nav>

    </div>
  )
}

export default HeaderMobile;