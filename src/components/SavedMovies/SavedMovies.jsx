import React, { useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

const SavedMovies = ({
  savedMovies,
  filteredSavedMovies,
  handleRemoveButton,
  handleSavedMoviesCheckbox,
  isSavedMoviesChecked,
  shortSavedFilms,
  valueInputSavedMovie,
  setValueInputSavedMovie,
  handleSubmitSearchSavedMovies,
  setIsSavedMoviesChecked,
  setFilteredSavedMovies,
  isSavedMoviesNotFound,
  setIsSavedMoviesNotFound,
}) => {
  useEffect(() => setFilteredSavedMovies(savedMovies), [savedMovies]);
  useEffect(() => setIsSavedMoviesNotFound(false), []);
  return (
    <div className='saved-movies'>
      <Header />
      <main>
        <SearchForm
          handleSavedMoviesCheckbox={handleSavedMoviesCheckbox}
          isSavedMoviesChecked={isSavedMoviesChecked}
          setValueInputSavedMovie={setValueInputSavedMovie}
          valueInputSavedMovie={valueInputSavedMovie}
          handleSubmitSearchSavedMovies={handleSubmitSearchSavedMovies}
          setIsSavedMoviesChecked={setIsSavedMoviesChecked}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          filteredSavedMovies={filteredSavedMovies}
          shortSavedFilms={shortSavedFilms}
          isSavedMoviesChecked={isSavedMoviesChecked}
          handleRemoveButton={handleRemoveButton}
          isSavedMoviesNotFound={isSavedMoviesNotFound}
          setIsSavedMoviesNotFound={setIsSavedMoviesNotFound}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SavedMovies;
