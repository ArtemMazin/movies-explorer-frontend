import React from 'react';
import './FormButtons.css';
import { Link, useLocation } from 'react-router-dom';

const FormButtons = ({ nameButton, span, nameLink }) => {
  const location = useLocation();
  return (
    <div className='form-buttons'>
      <button
        type='submit'
        className='form-buttons__submit'>
        {nameButton}
      </button>
      <div className='form-buttons__nav'>
        <span className='form-buttons__span'>{span}</span>
        <Link
          to={location.pathname === '/signup' ? '/signin' : '/signup'}
          className='form-buttons__link'>
          {nameLink}
        </Link>
      </div>
    </div>
  );
};

export default FormButtons;
