import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import useScreenOrientation from '../../../hooks/useScreenOrientation';
import Preloader from '../Preloader/Preloader';
import MoreMoviesButton from './MoreMoviesButton/MoreMoviesButton';
import useCountMovies from '../../../hooks/useCountMovies';

const MoviesCardList = ({
  movies,
  isLoading,
  isChecked,
  shortFilms,
  isMoviesNotFound,
  isSavedMoviesNotFound,
  handleLikeMovie,
  savedMovies,
  shortSavedFilms,
  handleRemoveButton,
  isSavedMoviesChecked,
  filteredSavedMovies,
}) => {
  const location = useLocation();
  const orientation = useScreenOrientation();
  const { getMoreMovies, countRenderMovies } = useCountMovies(orientation);

  return (
    <section className='movies'>
      {location.pathname === '/movies' ? (
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
        <>
          {(isSavedMoviesNotFound || (isSavedMoviesChecked && shortSavedFilms.length === 0)) && (
            <h2 className='movies__not-found'>Ничего не найдено</h2>
          )}
          <ul className='movies__list'>
            {(isSavedMoviesChecked ? shortSavedFilms : filteredSavedMovies)
              .slice(0, countRenderMovies)
              .map((card, i) => (
                <MoviesCard
                  card={card}
                  key={card._id}
                  handleRemoveButton={handleRemoveButton}
                  savedMovies={savedMovies}
                />
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
