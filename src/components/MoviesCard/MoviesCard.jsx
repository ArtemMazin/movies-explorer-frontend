import React from 'react';
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
import { BASE_MOVIES_URL } from '../../utils/constants';

const MoviesCard = ({ card, handleLikeMovie, handleRemoveButton, savedMovies }) => {
  const location = useLocation();
  function checkLike(card) {
    return savedMovies.some((f) => f.movieId === card.id);
  }

  return (
    <li className='card'>
      <Link
        to={card.trailerLink}
        target='blank'>
        <img
          className='card__image'
          src={location.pathname === '/movies' ? `${BASE_MOVIES_URL}${card.image.url}` : `${card.image}`}
          alt={card.nameRU}
        />
      </Link>
      <div className='card__description'>
        <div>
          <h2 className='card__name'>{card.nameRU}</h2>
          <p className='card__duration'>{`${Math.floor(card.duration / 60)}ч${Math.floor(card.duration % 60)}м`}</p>
        </div>
        {location.pathname === '/movies' ? (
          <input
            className='card__checkbox'
            type='checkbox'
            checked={checkLike(card)}
            onChange={(e) =>
              handleLikeMovie(e, {
                country: card.country,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: `${BASE_MOVIES_URL}${card.image.url}`,
                trailerLink: card.trailerLink,
                thumbnail: `${BASE_MOVIES_URL}${card.image.formats.thumbnail.url}`,
                movieId: card.id,
                nameRU: card.nameRU,
                nameEN: card.nameEN,
              })
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
