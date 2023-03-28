// import header from '../styles/scss/header.module.scss';

const Header = () => {
  return(
    <header className="app__header">
      <nav className="app__navigation">

        <div className="app__navigation__logo">
          <span className="app__navigation__logo-name">Аріна Козловська</span>
          <span className="app__navigation__logo-position">дизайнер</span>
        </div>
      
        <ul className="app__navigation__list">
            <li className="app__navigation__item">
              <a className="app__navigation__item-link" href="#">ПРОЄКТИ</a>
            </li>
            <li className="app__navigation__item">
              <a className="app__navigation__item-link" href="#">ПОСЛУГИ</a>
            </li>
            <li className="app__navigation__item">
              <a className="app__navigation__item-link" href="#">ПРО МЕНЕ</a>
            </li>
            <li className="app__navigation__item">
              <a className="app__navigation__item-link" href="#">КОНТАКТИ</a>
            </li>
        </ul>

        <a className="app__navigation__phone" href="tel:+380978159804">097 815 98 04</a>
      </nav>
    </header>
  )
}

export default Header;