import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img
        src={logo}
        alt='Логотип проекта: Место'
        className='header__logo'
      />
      <div className='header__menu'>
        <Link className='header__link'>Регистрация</Link>
        <button
          type='button'
          className='header__button'>
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
