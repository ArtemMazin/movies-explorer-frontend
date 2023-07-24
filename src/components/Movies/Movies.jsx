import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <main>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
};

export default Movies;
