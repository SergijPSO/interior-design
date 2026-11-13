import { useState } from "react";

const HeaderMobile = () => {
  const [isActive, setActive] = useState(false);

  const navToggle = () => {
    setActive(!isActive);
  };

  const closeNav = () => {
    setActive(false);
  };

  return (
    <div className='app__mobile'>
      <header className='app__mobile-header'>
        <div className='app__mobile-header__logo'>
          <a href='/' className='app__mobile-header__logo-link' onClick={closeNav}>
            <span className='app__mobile-header__logo-name'>
              Аріна Козловська
            </span>
            <span className='app__mobile-header__logo-position'>{`дизайнер інтер'єру`}</span>
          </a>
        </div>

        <div onClick={navToggle} className='app__mobile-header__burger'>
          <span className='app__mobile-header__burger-item'></span>
          <span className='app__mobile-header__burger-item'></span>
          <span className='app__mobile-header__burger-item'></span>
        </div>
      </header>

      <nav
        className={
          isActive ? "app__mobile-navigation--active" : "app__mobile-navigation"
        }
      >
        <a
          className='app__mobile-navigation__item'
          href='/'
          onClick={closeNav}
        >
          ГОЛОВНА
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#projects'
          onClick={closeNav}
        >
          ПРОЄКТИ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#prices'
          onClick={closeNav}
        >
          ВАРТІСТЬ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#about'
          onClick={closeNav}
        >
          ПРО МЕНЕ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#contacts'
          onClick={closeNav}
        >
          КОНТАКТИ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='tel:+380978159804'
          onClick={closeNav}
        >
          097 815 98 04
        </a>
      </nav>
      {isActive && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 98, background: 'transparent' }} 
          onClick={closeNav}
        />
      )}
    </div>
  );
};

export default HeaderMobile;
