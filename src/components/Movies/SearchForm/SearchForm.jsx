import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ setValueInputMovie, handleSubmit, handleCheckbox, valueInputMovie, valueCheckboxMovie }) => {
  return (
    <section className='search-form'>
      <form className='search-form__row'>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          tabIndex={1}
          value={valueInputMovie}
          onChange={(e) => setValueInputMovie(e.target.value)}
        />
        <button
          type='button'
          className='search-form__button'
          tabIndex={1}
          onClick={handleSubmit}
        />
      </form>

      <FilterCheckbox
        handleCheckbox={handleCheckbox}
        valueCheckboxMovie={valueCheckboxMovie}
      />
    </section>
  );
};

export default SearchForm;
