import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationForUser.css';
import HideMenu from '../../HideMenu/HideMenu';

const NavigationMovies = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleHideMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {!isMenuOpen ? (
        <button
          className='button-hamburger'
          onClick={toggleHideMenu}
          tabIndex={1}
        />
      ) : (
        <button
          className='button-hamburger-close'
          onClick={toggleHideMenu}
          tabIndex={1}
        />
      )}
      <HideMenu isMenuOpen={isMenuOpen} />
      <div className='nav-movies'>
        <ul className='nav-movies__links'>
          <li>
            <NavLink
              to={'/movies'}
              className={({ isActive }) => `nav-movies__link ${isActive ? 'active' : ''}`}
              tabIndex={1}>
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/saved-movies'}
              className={({ isActive }) => `nav-movies__link ${isActive ? 'active' : ''}`}
              tabIndex={1}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          to={'/profile'}
          className='nav-movies__profile-link'
          tabIndex={1}>
          <div className='nav-movies__profile-svg' />
          Аккаунт
        </Link>
      </div>
    </>
  );
};

export default NavigationMovies;
