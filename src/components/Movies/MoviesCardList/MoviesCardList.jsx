import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { favoriteCards } from '../../../utils/constants';
import { useLocation } from 'react-router-dom';
import useScreenOrientation from '../../../hooks/useScreenOrientation';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ movies, isLoading }) => {
  const [countRenderMovies, setCountRenderMovies] = useState(0);
  const [countMoreMovies, setCountMoreMovies] = useState(0);
  const location = useLocation();
  const orientation = useScreenOrientation();
  const screenWidth = window.screen.width;

  useEffect(() => {
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
  }, [orientation, screenWidth]);

  const getMoreMovies = () => {
    setCountRenderMovies(countRenderMovies + countMoreMovies);
  };

  return (
    <section className='movies'>
      {location.pathname === '/movies' || location.pathname === '/movies/' ? (
        <>
          {isLoading && <Preloader />}
          <ul className='movies__list'>
            {movies.slice(0, countRenderMovies).map((card, i) => (
              <MoviesCard
                card={card}
                key={i}
              />
            ))}
          </ul>

          {movies.length > countRenderMovies && (
            <button
              className='movies__button'
              type='button'
              onClick={getMoreMovies}
              tabIndex={1}>
              Ещё
            </button>
          )}
        </>
      ) : (
        <ul className='movies__list'>
          {/*!!!!!!!!! проверка ширины для соответствия макету !!!!!!!!!!*/}
          {screenWidth < 768
            ? favoriteCards.slice(0, 2).map((card, i) => (
                <MoviesCard
                  card={card}
                  key={i}
                />
              ))
            : favoriteCards.map((card, i) => (
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
