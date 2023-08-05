import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationForGuest.css';

const NavigationPromo = () => {
  return (
    <ul className='nav-promo'>
      <li>
        <Link
          to={'/signup'}
          className='nav-promo__link'
          tabIndex={1}>
          Регистрация
        </Link>
      </li>
      <li>
        <Link
          to={'/signin'}
          className='nav-promo__button'
          tabIndex={1}>
          Войти
        </Link>
      </li>
    </ul>
  );
};

export default NavigationPromo;
