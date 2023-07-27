import React from 'react';
import './FormHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

const FormHeader = () => {
  return (
    <header className='form-header'>
      <Link to={'/'}>
        <img
          src={logo}
          alt='Логотип проекта: Movies-Explorer'
          className='form-header__logo'
        />
      </Link>
      <h1 className='form-header__title'>Добро пожаловать!</h1>
    </header>
  );
};

export default FormHeader;
