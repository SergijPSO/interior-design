import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
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

  return (
    <header className='app__header'>
      <nav className='app__navigation'>
        <div className='app__navigation__logo'>
          <Link className='app__navigation__logo-link' href='/'>
            <span className='app__navigation__logo-name'>Аріна Козловська</span>
            <span className='app__navigation__logo-position'>{`дизайнер інтер'єру`}</span>
          </Link>
        </div>
        <ul className='app__navigation__list'>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/'
              scroll={false}
            >
              ГОЛОВНА
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#projects'
              scroll={false}
            >
              ПРОЄКТИ
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#prices'
              scroll={false}
            >
              ВАРТІСТЬ
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#about'
              scroll={false}
            >
              ПРО МЕНЕ
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#contacts'
              scroll={false}
            >
              КОНТАКТИ
            </Link>
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
