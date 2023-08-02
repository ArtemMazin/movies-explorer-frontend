import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavigationPromo from './NavigationPromo/NavigationPromo';
import './Navigation.css';
import NavigationMovies from './NavigationMovies/NavigationMovies';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className='nav'>
      <Link
        to={'/'}
        tabIndex={1}>
        <img
          src={logo}
          alt='Логотип проекта: Movies-Explorer'
          className='nav__logo'
        />
      </Link>
      {location.pathname === '/' ? <NavigationPromo /> : <NavigationMovies />}
    </nav>
  );
};

export default Navigation;
