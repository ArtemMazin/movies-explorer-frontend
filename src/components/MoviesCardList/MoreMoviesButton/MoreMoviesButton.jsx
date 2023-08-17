import React from 'react';
import './MoreMoviesButton.css';

const MoreMoviesButton = ({ getMoreMovies }) => {
  return (
    <button
      className='movies__button'
      type='button'
      onClick={getMoreMovies}
      tabIndex={1}>
      Ещё
    </button>
  );
};

export default MoreMoviesButton;
