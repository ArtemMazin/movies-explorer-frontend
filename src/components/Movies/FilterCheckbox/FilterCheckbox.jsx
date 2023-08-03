import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ handleCheckbox, valueCheckboxMovie }) => {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__text'>
        <input
          type='checkbox'
          className='filter-checkbox__input'
          tabIndex={1}
          checked={valueCheckboxMovie}
          onChange={handleCheckbox}
        />
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
