import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className={location.pathname === '/' ? 'header' : 'header header_white'}>
      <Navigation className='nav' />
    </header>
  );
};

export default Header;
