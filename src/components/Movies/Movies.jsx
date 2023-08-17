import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

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
    <div className='movies-main'>
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
    </div>
  );
};

export default Movies;
