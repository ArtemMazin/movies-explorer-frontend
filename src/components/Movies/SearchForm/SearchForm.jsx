import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <form className='search-form__row'>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
        />
        <button
          type='button'
          className='search-form__button'></button>
      </form>

      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;
