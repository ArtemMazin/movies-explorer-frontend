import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMovies.css';

const NavigationMovies = () => {
  return (
    <div className='nav-movies'>
      <ul className='nav-movies__links'>
        <li>
          <Link
            to={'/movies'}
            className='nav-movies__link'>
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            to={'/saved-movies'}
            className='nav-movies__link'>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <button
        type='button'
        className='nav-movies__button'>
        <div className='nav-movies__button-svg'></div>
        Аккаунт
      </button>
    </div>
  );
};

export default NavigationMovies;
