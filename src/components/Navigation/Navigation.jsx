import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavigationForGuest from './NavigationForGuest/NavigationForGuest';
import NavigationForUser from './NavigationForUser/NavigationForUser';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import './Navigation.css';

const Navigation = () => {
  const loggedIn = useContext(IsLoggedContext);

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
      {loggedIn ? <NavigationForUser /> : <NavigationForGuest />}
    </nav>
  );
};

export default Navigation;
