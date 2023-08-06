import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

const SavedMovies = ({ savedMovies }) => {
  return (
    <div className='saved-movies'>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList savedMovies={savedMovies} />
      </main>
      <Footer />
    </div>
  );
};

export default SavedMovies;
