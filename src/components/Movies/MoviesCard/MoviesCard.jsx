import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card }) => {
  const location = useLocation();

  return (
    <li className='card'>
      <img
        className='card__image'
        src={card.image}
        alt={card.nameRU}
      />
      <div className='card__description'>
        <div>
          <h2 className='card__name'>{card.nameRU}</h2>
          <p className='card__duration'>{card.duration}</p>
        </div>
        {location.pathname === '/movies' || location.pathname === '/movies/' ? (
          <input
            className='card__checkbox'
            type='checkbox'
          />
        ) : (
          <button
            className='card__delete-btn'
            type='button'></button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
