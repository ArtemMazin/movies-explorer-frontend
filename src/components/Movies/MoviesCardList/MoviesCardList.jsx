import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialCards } from '../../../utils/constants';

const MoviesCardList = () => {
  return (
    <section className='movies'>
      <ul className='movies__list'>
        {initialCards.map((card, i) => (
          <MoviesCard
            card={card}
            key={i}
          />
        ))}
      </ul>
      <button
        className='movies__button'
        type='button'>
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
