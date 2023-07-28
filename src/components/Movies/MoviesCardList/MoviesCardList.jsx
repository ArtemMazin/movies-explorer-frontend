import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialCards, favoriteCards } from '../../../utils/constants';
import { useLocation } from 'react-router-dom';
import useScreenOrientation from '../../../hooks/useScreenOrientation';

const MoviesCardList = () => {
  const [countRenderMovies, setCountRenderMovies] = useState(0);
  const [countMoreMovies, setCountMoreMovies] = useState(0);
  const location = useLocation();
  const orientation = useScreenOrientation();

  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth >= 1280) {
      setCountRenderMovies(16);
      setCountMoreMovies(4);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setCountRenderMovies(8);
      setCountMoreMovies(2);
    } else if (screenWidth < 768) {
      setCountRenderMovies(5);
      setCountMoreMovies(2);
    }
  }, [orientation]);

  const getMoreMovies = () => {
    setCountRenderMovies(countRenderMovies + countMoreMovies);
  };

  return (
    <section className='movies'>
      {location.pathname === '/movies' || location.pathname === '/movies/' ? (
        <>
          <ul className='movies__list'>
            {initialCards.slice(0, countRenderMovies).map((card, i) => (
              <MoviesCard
                card={card}
                key={i}
              />
            ))}
          </ul>

          {/* !!!!!!!!!! не забыть заменить >= на > !!!!!!!!!!! */}
          {initialCards.length >= countRenderMovies && (
            <button
              className='movies__button'
              type='button'
              onClick={getMoreMovies}>
              Ещё
            </button>
          )}
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
