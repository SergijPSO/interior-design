import { useState } from "react";
import { useRouter } from "next/router";

const HeaderMobile = () => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);

  const navToggle = () => {
    setActive(!isActive);
  };

  const closeNav = () => {
    setActive(false);
  };

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    closeNav();
    if (router.pathname === '/') {
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      } else {
        window.history.pushState(null, '', `/#${targetId}`);
        const scrollToElement = (retries = 20) => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else if (retries > 0) {
            setTimeout(() => scrollToElement(retries - 1), 150);
          }
        };
        scrollToElement();
      }
    } else {
      sessionStorage.setItem('scrollTarget', targetId);
      router.push('/');
    }
  };

  return (
    <div className='app__mobile'>
      <header className='app__mobile-header'>
        <div className='app__mobile-header__logo'>
          <a href='/' className='app__mobile-header__logo-link' onClick={(e) => handleAnchorClick(e, 'top')}>
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
          onClick={(e) => handleAnchorClick(e, 'top')}
        >
          ГОЛОВНА
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#projects'
          onClick={(e) => handleAnchorClick(e, 'projects')}
        >
          ПРОЄКТИ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#prices'
          onClick={(e) => handleAnchorClick(e, 'prices')}
        >
          ВАРТІСТЬ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#about'
          onClick={(e) => handleAnchorClick(e, 'about')}
        >
          ПРО МЕНЕ
        </a>
        <a
          className='app__mobile-navigation__item'
          href='/#contacts'
          onClick={(e) => handleAnchorClick(e, 'contacts')}
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
