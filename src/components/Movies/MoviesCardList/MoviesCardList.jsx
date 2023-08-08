import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import useScreenOrientation from '../../../hooks/useScreenOrientation';
import Preloader from '../Preloader/Preloader';
import MoreMoviesButton from './MoreMoviesButton/MoreMoviesButton';

const MoviesCardList = ({
  movies,
  isLoading,
  isChecked,
  shortFilms,
  isMoviesNotFound,
  handleLikeMovie,
  savedMovies,
  shortSavedFilms,
  handleRemoveButton,
  isSavedMoviesChecked,
  filteredSavedMovies,
}) => {
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
        (isLoading && <Preloader />) || (
          <>
            {(isMoviesNotFound || (isChecked && shortFilms.length === 0)) && (
              <h2 className='movies__not-found'>Ничего не найдено</h2>
            )}

            {
              <ul className='movies__list'>
                {(isChecked ? shortFilms : movies).slice(0, countRenderMovies).map((card, i) => (
                  <MoviesCard
                    card={card}
                    key={card.id}
                    handleLikeMovie={handleLikeMovie}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
            }

            {isChecked
              ? shortFilms.length > countRenderMovies && <MoreMoviesButton getMoreMovies={getMoreMovies} />
              : movies.length > countRenderMovies && <MoreMoviesButton getMoreMovies={getMoreMovies} />}
          </>
        )
      ) : (
        <ul className='movies__list'>
          {(isSavedMoviesChecked ? shortSavedFilms : filteredSavedMovies).slice(0, countRenderMovies).map((card, i) => (
            <MoviesCard
              card={card}
              key={card._id}
              handleRemoveButton={handleRemoveButton}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MoviesCardList;
