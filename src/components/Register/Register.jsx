import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

const Register = () => {
  return (
    <div className='register'>
      <header className='register__header'>
        <Link to={'/'}>
          <img
            src={logo}
            alt='Логотип проекта: Movies-Explorer'
            className='register__logo'
          />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
      </header>
      <main className='register__main'>
        <form
          action=''
          className='register__form'>
          <label className='register__label'>
            Имя
            <input
              type='text'
              className='register__input'
            />
          </label>
          <label className='register__label'>
            E-mail
            <input
              type='text'
              className='register__input'
            />
          </label>
          <label className='register__label'>
            Пароль
            <input
              type='text'
              className='register__input'
            />
          </label>
          <button
            type='submit'
            className='register__submit-btn'>
            Зарегистрироваться
          </button>
          <span className='register__span'>Уже зарегистрированы?</span>
          <Link
            to={'/signin'}
            className='register__login-link'>
            Войти
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Register;
