import { useState } from 'react';
import Link from 'next/link';

const HeaderMobile = () => {
  const [isActive, setActive] = useState(false)

  const navToggle = () => {
    setActive(!isActive)
  }

  return(
    <div className="app__mobile">

      <header className="app__mobile-header">
        <div className="app__mobile-header__logo">
          <span className="app__mobile-header__logo-name">Аріна Козловська</span>
          <span className="app__mobile-header__logo-position">дизайнер</span>
        </div>
        
        <div onClick={navToggle} className="app__mobile-header__burger">
          <span className="app__mobile-header__burger-item"></span>
          <span className="app__mobile-header__burger-item"></span>
          <span className="app__mobile-header__burger-item"></span>
        </div>
      </header>
    
      <nav className={isActive ? "app__mobile-navigation--active" : "app__mobile-navigation"}>
        <Link className="app__mobile-navigation__item" href="#projects" scroll={false}>ПРОЄКТИ</Link>
        <Link className="app__mobile-navigation__item" href="#services" scroll={false}>ПОСЛУГИ</Link>
        <Link className="app__mobile-navigation__item" href="#about" scroll={false}>ПРО МЕНЕ</Link>
        <Link className="app__mobile-navigation__item" href="#contacts">КОНТАКТИ</Link>
        <a className="app__mobile-navigation__item" href="tel:+380978159804">097 815 98 04</a>
      </nav>

    </div>
  )
}

export default HeaderMobile;