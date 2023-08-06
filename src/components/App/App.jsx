import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Page404 from '../Page404/Page404';
import { getMovies } from '../../utils/MoviesApi';
import { getContent, login, register, saveMovie } from '../../utils/MainApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [findedMovies, setFindedMovies] = useState([]);
  const [shortFilms, setShortFilms] = useState([]);
  const [valueInputMovie, setValueInputMovie] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessageLogin, setErrorMessageLogin] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [errorMessageRegister, setErrorMessageRegister] = useState('');
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);

  const navigate = useNavigate();

  function handleSubmitRegistration(e, name, email, password) {
    e.preventDefault();
    setIsLoading(true);

    register(name, email, password, setErrorMessageRegister)
      .then((res) => {
        setIsRegistrationSuccess(true);

        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrationSuccess(false);

        navigate('/signup', { replace: true });
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin() {
    setLoggedIn(true);
  }
  function handleSubmitLogin(e, email, password) {
    e.preventDefault();
    setIsLoading(true);

    login(email, password, setErrorMessageLogin)
      .then((data) => {
        if (data) {
          handleLogin();
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      getContent()
        .then((res) => {
          if (res) {
            // авторизуем пользователя
            setLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
        .catch(console.error);
    }
  }

  function handleCheckbox(e) {
    valueInputMovie.length !== 0 && setIsChecked(e.target.checked);
    handleSubmitSearchMovies(e, e.target.checked);
  }

  function handleLikeMovie(
    e,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    saveMovie(country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN);
  }

  function checkIsMoviesNotFound(filteredMovies) {
    filteredMovies.length === 0 ? setIsMoviesNotFound(true) : setIsMoviesNotFound(false);
  }

  function getFilteredMovies(arrayMovies) {
    return Array.from(arrayMovies).filter((item) => {
      return item.nameRU.toLowerCase().includes(valueInputMovie) || item.nameEN.toLowerCase().includes(valueInputMovie);
    });
  }

  async function handleSubmitSearchMovies(e, valueCheckbox) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (valueInputMovie.length === 0) {
        throw new Error('Нужно ввести ключевое слово');
      }
      const arrayMovies = await Promise.resolve(getMovies());
      const filteredMovies = getFilteredMovies(arrayMovies);

      setShortFilms(
        filteredMovies.filter((film) => {
          return film.duration <= 40;
        })
      );

      checkIsMoviesNotFound(filteredMovies);
      setMovies(arrayMovies);
      setFindedMovies(filteredMovies);

      localStorage.setItem(
        'savedData',
        JSON.stringify({ checkbox: valueCheckbox, text: valueInputMovie, movies: filteredMovies })
      );
    } catch (err) {
      console.error(err.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('savedData'));

    if (localStorageData) {
      setFindedMovies(localStorageData.movies);
      setValueInputMovie(localStorageData.text);
      setIsChecked(localStorageData.checkbox);

      setShortFilms(
        localStorageData.movies.filter((film) => {
          return film.duration <= 40;
        })
      );
    }
  }, []);

  return (
    <IsLoggedContext.Provider value={loggedIn}>
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
                valueInputMovie={valueInputMovie}
                handleSubmit={handleSubmitSearchMovies}
                isLoading={isLoading}
                handleCheckbox={handleCheckbox}
                isChecked={isChecked}
                shortFilms={shortFilms}
                isMoviesNotFound={isMoviesNotFound}
                handleLikeMovie={handleLikeMovie}
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
            element={<Login handleSubmitLogin={handleSubmitLogin} />}
          />
          <Route
            path='/signup'
            element={<Register handleSubmitRegistration={handleSubmitRegistration} />}
          />
          <Route
            path='*'
            element={<Page404 />}
          />
        </Routes>
      </div>
    </IsLoggedContext.Provider>
  );
}

export default App;
