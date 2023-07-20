import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationPromo.css';

const NavigationPromo = () => {
  return (
    <div className='nav-promo'>
      <Link
        to={'/signup'}
        className='nav-promo__link'>
        Регистрация
      </Link>

      <button
        type='button'
        className='nav-promo__button'>
        Войти
      </button>
    </div>
  );
};

export default NavigationPromo;
