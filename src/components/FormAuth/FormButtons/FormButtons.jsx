import React from 'react';
import './FormButtons.css';
import { Link, useLocation } from 'react-router-dom';

const FormButtons = ({ isFormValid, isLoading }) => {
  const location = useLocation();
  return (
    <div className='form-buttons'>
      <button
        type='submit'
        className={`form-buttons__submit ${!isFormValid || isLoading ? 'form-buttons__submit_disabled' : ''}`}
        disabled={!isFormValid || isLoading}>
        {location.pathname === '/signup' ? 'Зарегистрироваться' : 'Войти'}
      </button>
      <div className='form-buttons__nav'>
        <span className='form-buttons__span'>
          {location.pathname === '/signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}
        </span>
        <Link
          to={location.pathname === '/signup' ? '/signin' : '/signup'}
          className='form-buttons__link'>
          {location.pathname === '/signup' ? 'Войти' : 'Регистрация'}
        </Link>
      </div>
    </div>
  );
};

export default FormButtons;
