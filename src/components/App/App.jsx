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

  useEffect(() => {
    Promise.all([getMovies()])
      .then(([arrayCards]) => {
        setMovies(arrayCards);
      })
      .catch(console.error);
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
          element={<Movies movies={movies} />}
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
