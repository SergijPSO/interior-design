import Link from "next/link";

const Header = () => {
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
              href='/#services'
              scroll={false}
            >
              ПОСЛУГИ
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
        <a className='app__navigation__phone' href='tel:+380978159804'>
          097 815 98 04
        </a>
      </nav>
    </header>
  );
};

export default Header;
