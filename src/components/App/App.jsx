import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
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

function App() {
  const [movies, setMovies] = useState([]);
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
  const [errorMessageLogin, setErrorMessageLogin] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [errorMessageRegister, setErrorMessageRegister] = useState('');
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);

  const navigate = useNavigate();

  useEffect(() => setFilteredSavedMovies(savedMovies), [savedMovies]);

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

  function handleLogout() {
    logout()
      .then((res) => {
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('savedData');
      })
      .catch((err) => console.log(err));
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
            setCurrentUser(res.data);
            setLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
        .catch(console.error);
      getSavedMovies()
        .then((res) => {
          if (res) {
            setSavedMovies(res.data);
          }
        })
        .catch(console.error);
    }
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
    e.target.checked
      ? saveMovie(
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
        ).then(() =>
          getSavedMovies()
            .then((res) => {
              if (res) {
                setSavedMovies(res.data);
                setShortSavedFilms(
                  res.data.filter((film) => {
                    return film.duration <= 40;
                  })
                );
              }
            })
            .catch(console.error)
        )
      : removeFilm(movieId);
  }
  function removeFilm(movieId) {
    const film = savedMovies.find((movie) => movie.movieId === movieId);

    removeMovie(film._id)
      .then(() => {
        const newCards = savedMovies.filter((newCard) => {
          return newCard._id !== film._id;
        });
        setSavedMovies(newCards);
        setShortSavedFilms(
          newCards.filter((film) => {
            return film.duration <= 40;
          })
        );
      })
      .catch(console.error);
  }

  function handleRemoveButton(cardID) {
    setIsLoading(true);

    removeMovie(cardID)
      .then(() => {
        const newCards = savedMovies.filter((newCard) => {
          return newCard._id !== cardID;
        });
        setSavedMovies(newCards);
        setShortSavedFilms(
          newCards.filter((film) => {
            return film.duration <= 40;
          })
        );
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function checkIsMoviesNotFound(filteredMovies) {
    filteredMovies.length === 0 ? setIsMoviesNotFound(true) : setIsMoviesNotFound(false);
  }

  function getFilteredMovies(arrayMovies, value) {
    return Array.from(arrayMovies).filter((item) => {
      return item.nameRU.toLowerCase().includes(value) || item.nameEN.toLowerCase().includes(value);
    });
  }

  function handleCheckbox(e) {
    valueInputMovie.length !== 0 && setIsChecked(e.target.checked);
    handleSubmitSearchMovies(e, e.target.checked);
  }

  function handleSavedMoviesCheckbox(e) {
    setIsSavedMoviesChecked(e.target.checked);

    const filteredSavedMovies = getFilteredMovies(savedMovies, valueInputSavedMovie);

    setFilteredSavedMovies(filteredSavedMovies);
    setShortSavedFilms(
      filteredSavedMovies.filter((film) => {
        return film.duration <= 40;
      })
    );
  }

  async function handleSubmitSearchMovies(e, valueCheckbox) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (valueInputMovie.length === 0) {
        throw new Error('Нужно ввести ключевое слово');
      }
      const arrayMovies = await Promise.resolve(getMovies());
      const filteredMovies = getFilteredMovies(arrayMovies, valueInputMovie);

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

  function handleSubmitSearchSavedMovies(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const filteredSavedMovies = getFilteredMovies(savedMovies, valueInputSavedMovie);

      setFilteredSavedMovies(filteredSavedMovies);
      setShortSavedFilms(
        filteredSavedMovies.filter((film) => {
          return film.duration <= 40;
        })
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

  function handleUpdateUser(user) {
    setIsLoading(true);
    updateProfile(user)
      .then((userInfo) => {
        setCurrentUser(userInfo.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
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
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <SavedMovies
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
                <Profile
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
        </div>
      </IsLoggedContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
