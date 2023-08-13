import { BASE_URL } from './constants';

function getResponseData(res, setErrorMessage) {
  if (!res.ok) {
    //получаем ответ от сервера с текстом ошибки, чтобы передать его в попап
    res.text().then((text) => {
      setErrorMessage(JSON.parse(text).message || 'Произошла ошибка');
    });
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

async function request(url, options, setErrorMessage) {
  const res = await fetch(`${BASE_URL}${url}`, options);
  return getResponseData(res, setErrorMessage);
}

export function register(name, email, password, setErrorMessage) {
  return request(
    '/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    },
    setErrorMessage
  );
}

export function login(email, password, setErrorMessage) {
  return request(
    '/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    },
    setErrorMessage
  ).then((data) => {
    if (data) {
      localStorage.setItem('token', 'isLoggedIn');
      return data;
    }
  });
}

export function logout() {
  return request('/signout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export function getContent() {
  return request('/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export function saveMovie(dataMovie) {
  return request('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      country: dataMovie.country,
      director: dataMovie.director,
      duration: dataMovie.duration,
      year: dataMovie.year,
      description: dataMovie.description,
      image: dataMovie.image,
      trailerLink: dataMovie.trailerLink,
      thumbnail: dataMovie.thumbnail,
      movieId: dataMovie.movieId,
      nameRU: dataMovie.nameRU,
      nameEN: dataMovie.nameEN,
    }),
  });
}

export function getSavedMovies() {
  return request('/movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
export function removeMovie(movieID) {
  return request(`/movies/${movieID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
export function updateProfile(data, setErrorMessage) {
  return request(
    '/users/me',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    },
    setErrorMessage
  );
}
