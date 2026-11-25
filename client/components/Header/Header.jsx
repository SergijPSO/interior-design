import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('097 815 98 04');
  const [phoneRaw, setPhoneRaw] = useState('+380978159804');

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    fetch(`${API_URL}/api/content/about`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.phone) {
          setPhoneRaw(data.phone);
          setPhone(data.phone);
        }
      })
      .catch(err => console.error('Error fetching header phone:', err));
  }, []);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
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
    <header className='app__header'>
      <nav className='app__navigation'>
        <div className='app__navigation__logo'>
          <a className='app__navigation__logo-link' href='/' onClick={(e) => handleAnchorClick(e, 'top')}>
            <span className='app__navigation__logo-name'>Аріна Козловська</span>
            <span className='app__navigation__logo-position'>{`дизайнер інтер'єру`}</span>
          </a>
        </div>
        <ul className='app__navigation__list'>
          <li className='app__navigation__item'>
            <a
              className='app__navigation__item-link'
              href='/'
              onClick={(e) => handleAnchorClick(e, 'top')}
            >
              ГОЛОВНА
            </a>
          </li>
          <li className='app__navigation__item'>
            <a
              className='app__navigation__item-link'
              href='/#projects'
              onClick={(e) => handleAnchorClick(e, 'projects')}
            >
              ПРОЄКТИ
            </a>
          </li>
          <li className='app__navigation__item'>
            <a
              className='app__navigation__item-link'
              href='/#prices'
              onClick={(e) => handleAnchorClick(e, 'prices')}
            >
              ВАРТІСТЬ
            </a>
          </li>
          <li className='app__navigation__item'>
            <a
              className='app__navigation__item-link'
              href='/#about'
              onClick={(e) => handleAnchorClick(e, 'about')}
            >
              ПРО МЕНЕ
            </a>
          </li>
          <li className='app__navigation__item'>
            <a
              className='app__navigation__item-link'
              href='/#contacts'
              onClick={(e) => handleAnchorClick(e, 'contacts')}
            >
              КОНТАКТИ
            </a>
          </li>
        </ul>
        <a className='app__navigation__phone' href={`tel:${phoneRaw}`}>
          {phone}
        </a>
      </nav>
    </header>
  );
};

export default Header;
