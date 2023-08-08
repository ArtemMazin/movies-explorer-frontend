import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

const SavedMovies = ({
  filteredSavedMovies,
  handleRemoveButton,
  handleSavedMoviesCheckbox,
  isSavedMoviesChecked,
  shortSavedFilms,
  valueInputSavedMovie,
  setValueInputSavedMovie,
  handleSubmitSearchSavedMovies,
}) => {
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
        />
        <MoviesCardList
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
