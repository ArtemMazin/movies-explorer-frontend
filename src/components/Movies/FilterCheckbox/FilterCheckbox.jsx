import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className='filter-checkbox'>
      <input
        type='checkbox'
        name='tumb'
        id='tumb'
        className='filter-checkbox__input'
      />

      <label
        for='tumb'
        className='filter-checkbox__text'>
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
