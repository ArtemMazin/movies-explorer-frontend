import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationMovies.css';
import HideMenu from '../HideMenu/HideMenu';

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
        />
      ) : (
        <button
          className='button-hamburger-close'
          onClick={toggleHideMenu}
        />
      )}
      <HideMenu isMenuOpen={isMenuOpen} />
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
          <div className='nav-movies__profile-svg' />
          Аккаунт
        </Link>
      </div>
    </>
  );
};

export default NavigationMovies;
