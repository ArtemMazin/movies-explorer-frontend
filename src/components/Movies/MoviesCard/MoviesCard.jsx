import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ card }) => {
  return (
    <li>
      <img
        src={card.image}
        alt={card.nameRU}
      />
      <h2>{card.nameRU}</h2>
      <p>{card.duration}</p>
    </li>
  );
};

export default MoviesCard;
