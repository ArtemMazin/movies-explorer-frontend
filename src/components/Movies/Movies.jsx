import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = ({ movies, setValueInputMovie, handleSubmit, isLoading }) => {
  return (
    <>
      <Header />
      <main>
        <SearchForm
          setValueInputMovie={setValueInputMovie}
          handleSubmit={handleSubmit}
        />
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
