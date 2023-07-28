import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationMovies.css';

const NavigationMovies = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {!isMenuOpen ? (
        <button
          className='header__menu-hamburger'
          onClick={toggleHideMenu}>
          <span className='header__menu-bar' />
        </button>
      ) : (
        <button
          className='header__close-menu-btn'
          onClick={toggleHideMenu}
        />
      )}
      <div className='nav-movies'>
        <ul className='nav-movies__links'>
          <li>
            <NavLink
              to={'/movies'}
              className='nav-movies__link'>
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/saved-movies'}
              className={({ isActive }) => `nav-movies__link ${isActive ? 'active' : ''}`}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          to={'/profile'}
          className='nav-movies__profile-link'>
          <div className='nav-movies__profile-svg'></div>
          Аккаунт
        </Link>
      </div>
    </>
  );
};

export default NavigationMovies;
