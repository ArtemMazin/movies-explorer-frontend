import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='nav'>
      <Link to={'/'}>
        <img
          src={logo}
          alt='Логотип проекта: Место'
          className='header__logo'
        />
      </Link>

      <div className='nav__menu'>
        <Link
          to={'/signup'}
          className='nav__link'>
          Регистрация
        </Link>
        <button
          type='button'
          className='nav__button'>
          Войти
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
