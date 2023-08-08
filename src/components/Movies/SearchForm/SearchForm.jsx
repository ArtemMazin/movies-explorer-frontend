import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({
  setValueInputMovie,
  handleSubmit,
  handleCheckbox,
  valueInputMovie,
  isChecked,
  handleSavedMoviesCheckbox,
  isSavedMoviesChecked,
}) => {
  return (
    <section className='search-form'>
      <form
        className='search-form__row'
        onSubmit={(e) => handleSubmit(e, isChecked)}>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          tabIndex={1}
          value={valueInputMovie}
          onChange={(e) => setValueInputMovie(e.target.value)}
        />
        <button
          type='submit'
          className='search-form__button'
          tabIndex={1}
        />
      </form>

      <FilterCheckbox
        handleCheckbox={handleCheckbox}
        isChecked={isChecked}
        handleSavedMoviesCheckbox={handleSavedMoviesCheckbox}
        isSavedMoviesChecked={isSavedMoviesChecked}
      />
    </section>
  );
};

export default SearchForm;
