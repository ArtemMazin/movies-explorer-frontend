import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ card }) => {
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
        <input
          className='card__checkbox'
          type='checkbox'
          name='favorite_checkbox'
          id='favorite_checkbox'
        />
      </div>
    </li>
  );
};

export default MoviesCard;
