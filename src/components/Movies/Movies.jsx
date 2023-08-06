import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = ({
  movies,
  setValueInputMovie,
  handleSubmit,
  isLoading,
  isMoviesNotFound,
  handleCheckbox,
  shortFilms,
  isChecked,
  valueInputMovie,
  handleLikeMovie,
  savedMovies,
}) => {
  return (
    <>
      <Header />
      <main>
        <SearchForm
          setValueInputMovie={setValueInputMovie}
          handleSubmit={handleSubmit}
          handleCheckbox={handleCheckbox}
          valueInputMovie={valueInputMovie}
          isChecked={isChecked}
        />
        <MoviesCardList
          movies={movies}
          shortFilms={shortFilms}
          isLoading={isLoading}
          isMoviesNotFound={isMoviesNotFound}
          isChecked={isChecked}
          handleLikeMovie={handleLikeMovie}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
