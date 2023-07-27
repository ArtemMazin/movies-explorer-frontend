import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationPromo.css';

const NavigationPromo = () => {
  return (
    <ul className='nav-promo'>
      <li>
        <Link
          to={'/signup'}
          className='nav-promo__link'>
          Регистрация
        </Link>
      </li>
      <li>
        <Link
          to={'/signin'}
          className='nav-promo__button'>
          Войти
        </Link>
      </li>
    </ul>
  );
};

export default NavigationPromo;
