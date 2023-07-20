import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavigationPromo from './NavigationPromo/NavigationPromo';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='nav'>
      <Link to={'/'}>
        <img
          src={logo}
          alt='Логотип проекта: Movies-Explorer'
          className='nav__logo'
        />
      </Link>
      <NavigationPromo />
    </nav>
  );
};

export default Navigation;
