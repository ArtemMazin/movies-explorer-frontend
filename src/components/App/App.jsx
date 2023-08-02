import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Page404 from '../Page404/Page404';
import { getMovies } from '../../utils/MoviesApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [findedMovies, setFindedMovies] = useState([]);
  const [valueInputMovie, setValueInputMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);

  function getFilteredMovies(arrayMovies) {
    return Array.from(arrayMovies).filter((item) => {
      return item.nameRU.toLowerCase().includes(valueInputMovie);
    });
  }

  function checkIsMoviesNotFound(filteredMovies) {
    filteredMovies.length === 0 ? setIsMoviesNotFound(true) : setIsMoviesNotFound(false);
  }

  async function handleSubmitSearchMovies(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (valueInputMovie.length === 0) {
        throw new Error('Нужно ввести ключевое слово');
      }
      const arrayMovies = await Promise.resolve(getMovies());
      const filteredMovies = getFilteredMovies(arrayMovies);

      checkIsMoviesNotFound(filteredMovies);
      setMovies(arrayMovies);
      setFindedMovies(filteredMovies);
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
    } catch (err) {
      console.error(err.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const movies = localStorage.getItem('movies');
    if (movies) {
      setFindedMovies(JSON.parse(movies));
    }
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/movies'
          element={
            <Movies
              movies={findedMovies}
              setValueInputMovie={setValueInputMovie}
              handleSubmit={handleSubmitSearchMovies}
              isLoading={isLoading}
              isMoviesNotFound={isMoviesNotFound}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </div>
  );
}

export default App;
