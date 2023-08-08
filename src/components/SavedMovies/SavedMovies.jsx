import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

const SavedMovies = ({
  savedMovies,
  handleRemoveButton,
  handleSavedMoviesCheckbox,
  isSavedMoviesChecked,
  shortSavedFilms,
}) => {
  return (
    <div className='saved-movies'>
      <Header />
      <main>
        <SearchForm
          handleSavedMoviesCheckbox={handleSavedMoviesCheckbox}
          isSavedMoviesChecked={isSavedMoviesChecked}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          shortSavedFilms={shortSavedFilms}
          isSavedMoviesChecked={isSavedMoviesChecked}
          handleRemoveButton={handleRemoveButton}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SavedMovies;
