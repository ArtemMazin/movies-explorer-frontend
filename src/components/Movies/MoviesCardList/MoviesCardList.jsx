import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialCards } from '../../../utils/constants';

const MoviesCardList = () => {
  return (
    <div>
      <ul>
        {initialCards.map((card, i) => (
          <MoviesCard
            card={card}
            key={i}
          />
        ))}
      </ul>
      <button type='button'></button>
    </div>
  );
};

export default MoviesCardList;
