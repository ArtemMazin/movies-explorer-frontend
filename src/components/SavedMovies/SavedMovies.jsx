import React, { useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
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
}) => {
  useEffect(() => setFilteredSavedMovies(savedMovies), [savedMovies]);
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
        />
      </main>
      <Footer />
    </div>
  );
};

export default SavedMovies;
