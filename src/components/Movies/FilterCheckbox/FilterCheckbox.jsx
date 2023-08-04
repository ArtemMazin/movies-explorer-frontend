import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ handleCheckbox, isChecked }) => {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__text'>
        <input
          type='checkbox'
          className='filter-checkbox__input'
          tabIndex={1}
          checked={isChecked}
          onChange={handleCheckbox}
        />
        Короткометражки
      </label>
    </div>
  );
};

export default FilterCheckbox;
