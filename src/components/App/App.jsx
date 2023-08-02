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

  const handleSubmitSearchMovies = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Promise.all([getMovies()])
      .then(([arrayCards]) => {
        setMovies(arrayCards);
      })
      .then(() => {
        const filteredMovies = Array.from(movies).filter((item) => {
          return item.nameRU.toLowerCase().includes(valueInputMovie);
        });

        setFindedMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
      })

      .catch(console.error)
      .finally(() => setIsLoading(false));
  };
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
