import React from 'react';
import './HideMenu.css';
import { Link, NavLink } from 'react-router-dom';

const HideMenu = ({ isMenuOpen }) => {
  return (
    <div className={`hide-wrapper ${isMenuOpen ? 'hide-wrapper_active' : ''}`}>
      <div className={`nav-hide ${isMenuOpen ? 'nav-hide_active' : ''}`}>
        <ul className='nav-hide__links'>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) => `nav-hide__link ${isActive ? 'active' : ''}`}
              tabIndex={1}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/movies'}
              className={({ isActive }) => `nav-hide__link ${isActive ? 'active' : ''}`}
              tabIndex={1}>
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/saved-movies'}
              className={({ isActive }) => `nav-hide__link ${isActive ? 'active' : ''}`}
              tabIndex={1}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          to={'/profile'}
          className='nav-hide__profile-link'
          tabIndex={1}>
          <div className='nav-hide__profile-svg' />
          Аккаунт
        </Link>
      </div>
    </div>
  );
};

export default HideMenu;
