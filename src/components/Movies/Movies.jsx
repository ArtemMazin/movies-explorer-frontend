import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = ({ movies }) => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
