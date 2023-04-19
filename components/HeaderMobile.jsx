import { useState } from 'react';
import Link from 'next/link';

const HeaderMobile = () => {
  const [isActive, setActive] = useState(false)

  const navToggle = () => {
    setActive(!isActive)
  }

  const closeNav = () => {
    setActive(false)
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
        <Link className="app__mobile-navigation__item" href="/" scroll={false} onClick={closeNav}>ГОЛОВНА</Link>
        <Link className="app__mobile-navigation__item" href="#projects" scroll={false} onClick={closeNav}>ПРОЄКТИ</Link>
        <Link className="app__mobile-navigation__item" href="#services" scroll={false} onClick={closeNav}>ПОСЛУГИ</Link>
        <Link className="app__mobile-navigation__item" href="#about" scroll={false} onClick={closeNav}>ПРО МЕНЕ</Link>
        <Link className="app__mobile-navigation__item" href="#contacts" onClick={closeNav}>КОНТАКТИ</Link>
        <a className="app__mobile-navigation__item" href="tel:+380978159804" onClick={closeNav}>097 815 98 04</a>
      </nav>

    </div>
  )
}

export default HeaderMobile;
