import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialCards, favoriteCards } from '../../../utils/constants';
import { useLocation } from 'react-router-dom';

const MoviesCardList = () => {
  const location = useLocation();

  return (
    <section className='movies'>
      {location.pathname === '/movies' ? (
        <>
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
        </>
      ) : (
        <ul className='movies__list'>
          {favoriteCards.map((card, i) => (
            <MoviesCard
              card={card}
              key={i}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MoviesCardList;
