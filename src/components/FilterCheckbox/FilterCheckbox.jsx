import React from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

const FilterCheckbox = ({ handleCheckbox, isChecked, handleSavedMoviesCheckbox, isSavedMoviesChecked }) => {
  const location = useLocation();
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__text'>
        {location.pathname === '/movies' ? (
          <input
            type='checkbox'
            className='filter-checkbox__input'
            tabIndex={1}
            checked={isChecked}
            onChange={handleCheckbox}
          />
        ) : (
          <input
            type='checkbox'
            className='filter-checkbox__input'
            tabIndex={1}
            checked={isSavedMoviesChecked}
            onChange={handleSavedMoviesCheckbox}
          />
        )}
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
