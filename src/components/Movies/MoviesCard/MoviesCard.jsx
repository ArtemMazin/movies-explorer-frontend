import React from 'react';
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
import { BASE_MOVIES_URL } from '../../../utils/constants';

const MoviesCard = ({ card, handleLikeMovie, handleRemoveButton }) => {
  const location = useLocation();

  return (
    <li className='card'>
      <Link
        to={card.trailerLink}
        target='blank'>
        <img
          className='card__image'
          src={
            location.pathname === '/movies' || location.pathname === '/movies/'
              ? `${BASE_MOVIES_URL}${card.image.url}`
              : `${card.image}`
          }
          alt={card.nameRU}
        />
      </Link>
      <div className='card__description'>
        <div>
          <h2 className='card__name'>{card.nameRU}</h2>
          <p className='card__duration'>{`${Math.floor(card.duration / 60)}ч${Math.floor(card.duration % 60)}м`}</p>
        </div>
        {location.pathname === '/movies' || location.pathname === '/movies/' ? (
          <input
            className='card__checkbox'
            type='checkbox'
            onClick={(e) =>
              handleLikeMovie(
                e,
                card.country,
                card.director,
                card.duration,
                card.year,
                card.description,
                `${BASE_MOVIES_URL}${card.image.url}`,
                card.trailerLink,
                `${BASE_MOVIES_URL}${card.image.formats.thumbnail.url}`,
                card.id,
                card.nameRU,
                card.nameEN
              )
            }
          />
        ) : (
          <button
            className='card__delete-btn'
            type='button'
            onClick={() => handleRemoveButton(card._id)}></button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
