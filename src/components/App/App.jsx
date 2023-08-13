import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Page404 from '../Page404/Page404';
import { getMovies } from '../../utils/MoviesApi';
import {
  getContent,
  getSavedMovies,
  login,
  logout,
  register,
  removeMovie,
  saveMovie,
  updateProfile,
} from '../../utils/MainApi';
import ProtectedRouteElement from '../ProtectedRoute';
import { filterSavedMovies, filterShortMovies, getFilteredMovies } from '../../utils/constants';
import './App.css';
import Notification from '../Notification/Notification';

function App() {
  const [findedMovies, setFindedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [shortFilms, setShortFilms] = useState([]);
  const [shortSavedFilms, setShortSavedFilms] = useState([]);
  const [valueInputMovie, setValueInputMovie] = useState('');
  const [valueInputSavedMovie, setValueInputSavedMovie] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSavedMoviesChecked, setIsSavedMoviesChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);

  const navigate = useNavigate();

  useEffect(() => setFilteredSavedMovies(savedMovies), [savedMovies]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('savedData'));

    if (localStorageData) {
      const { movies, text, checkbox } = localStorageData;
      setFindedMovies(movies);
      setValueInputMovie(text);
      setIsChecked(checkbox);
      setShortFilms(filterShortMovies(movies));
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  async function checkToken() {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const profileData = await getContent();
        // авторизуем пользователя
        setCurrentUser(profileData.data);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        //показываем сохраненные фильмы
        const savedMovies = await getSavedMovies();
        updateSavedMovies(savedMovies.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationIsOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [notificationIsOpen]);

  function updateSavedMovies(savedMovies) {
    try {
      setSavedMovies(savedMovies);
      setShortSavedFilms(filterShortMovies(savedMovies));
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmitRegistration(e, name, email, password) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await register(name, email, password, setErrorMessage);
      navigate('/signin', { replace: true });
    } catch (err) {
      console.error(err);
      setNotificationIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmitLogin(e, email, password) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password, setErrorMessage);
      setLoggedIn(true);
      navigate('/movies', { replace: true });
    } catch (err) {
      console.error(err);
      setNotificationIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    setIsLoading(true);

    try {
      await logout();
      setLoggedIn(false);
      localStorage.clear();
      setFindedMovies([]);
      setValueInputMovie('');
      setIsChecked(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLikeMovie(e, dataMovie) {
    try {
      if (e.target.checked) {
        saveFilm(dataMovie);
      } else {
        removeFilm(dataMovie.movieId);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function saveFilm(dataMovie) {
    try {
      await saveMovie(dataMovie);
      const savedMovies = await getSavedMovies();
      updateSavedMovies(savedMovies.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function removeFilm(movieId) {
    try {
      const film = savedMovies.find((movie) => movie.movieId === movieId);
      await removeMovie(film._id);
      const newCards = filterSavedMovies(savedMovies, film._id);
      updateSavedMovies(newCards);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleRemoveButton(cardID) {
    try {
      await removeMovie(cardID);
      const newCards = filterSavedMovies(savedMovies, cardID);
      updateSavedMovies(newCards);
    } catch (err) {
      console.error(err);
    }
  }

  function checkIsMoviesNotFound(filteredMovies) {
    filteredMovies.length === 0 ? setIsMoviesNotFound(true) : setIsMoviesNotFound(false);
  }

  function handleCheckbox(e) {
    valueInputMovie.length !== 0 && setIsChecked(e.target.checked);
    handleSubmitSearchMovies(e, e.target.checked);
  }

  function handleSavedMoviesCheckbox(e) {
    try {
      setIsSavedMoviesChecked(e.target.checked);
      updateFilteredSavedMovies();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmitSearchMovies(e, valueCheckbox) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (valueInputMovie.length === 0) {
        throw new Error('Нужно ввести ключевое слово');
      }
      const arrayMovies = await getMovies();
      const filteredMovies = getFilteredMovies(arrayMovies, valueInputMovie);

      setShortFilms(filterShortMovies(filteredMovies));
      checkIsMoviesNotFound(filteredMovies);
      setFindedMovies(filteredMovies);

      localStorage.setItem(
        'savedData',
        JSON.stringify({ checkbox: valueCheckbox, text: valueInputMovie, movies: filteredMovies })
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmitSearchSavedMovies(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      updateFilteredSavedMovies();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function updateFilteredSavedMovies() {
    try {
      const filteredSavedMovies = getFilteredMovies(savedMovies, valueInputSavedMovie);
      setFilteredSavedMovies(filteredSavedMovies);
      setShortSavedFilms(filterShortMovies(filteredSavedMovies));
    } catch (err) {
      console.error(err);
    }
  }

  async function handleUpdateUser(user) {
    setIsLoading(true);
    try {
      const updated = await updateProfile(user);
      setCurrentUser(updated.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                <ProtectedRouteElement
                  element={Movies}
                  loggedIn={loggedIn}
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
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  filteredSavedMovies={filteredSavedMovies}
                  handleRemoveButton={handleRemoveButton}
                  handleSavedMoviesCheckbox={handleSavedMoviesCheckbox}
                  isSavedMoviesChecked={isSavedMoviesChecked}
                  shortSavedFilms={shortSavedFilms}
                  setValueInputSavedMovie={setValueInputSavedMovie}
                  valueInputSavedMovie={valueInputSavedMovie}
                  handleSubmitSearchSavedMovies={handleSubmitSearchSavedMovies}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRouteElement
                  element={Profile}
                  loggedIn={loggedIn}
                  handleUpdateUser={handleUpdateUser}
                  handleLogout={handleLogout}
                />
              }
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
          <Notification
            notificationIsOpen={notificationIsOpen}
            setNotificationIsOpen={setNotificationIsOpen}
            errorMessage={errorMessage}
          />
        </div>
      </IsLoggedContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
