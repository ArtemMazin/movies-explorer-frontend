import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <main className='main'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
};

export default SavedMovies;
