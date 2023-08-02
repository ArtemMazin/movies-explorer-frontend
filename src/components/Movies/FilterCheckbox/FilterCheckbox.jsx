import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__text'>
        <input
          type='checkbox'
          className='filter-checkbox__input'
          tabIndex={1}
        />
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
