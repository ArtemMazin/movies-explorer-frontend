import { BASE_URL } from './constants';

function getResponseData(res, setMessage) {
  if (!res.ok) {
    //получаем ответ от сервера с текстом ошибки, чтобы передать его в попап
    res.text().then((text) => {
      setMessage && setMessage(JSON.parse(text).message || 'Произошла ошибка');
    });
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

async function request(url, options, setMessage) {
  const res = await fetch(`${BASE_URL}${url}`, options);
  return getResponseData(res, setMessage);
}

export function register(name, email, password, setMessage) {
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
    setMessage
  );
}

export function login(email, password, setMessage) {
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
    setMessage
  ).then((data) => {
    if (data) {
      localStorage.setItem('token', 'isLoggedIn');
      return data;
    }
  });
}

export function logout(setMessage) {
  return request(
    '/signout',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
    setMessage
  );
}

export function getContent(setMessage) {
  return request(
    '/users/me',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
    setMessage
  );
}

export function saveMovie(dataMovie, setMessage) {
  return request(
    '/movies',
    {
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
    },
    setMessage
  );
}

export function getSavedMovies(setMessage) {
  return request(
    '/movies',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
    setMessage
  );
}
export function removeMovie(movieID, setMessage) {
  return request(
    `/movies/${movieID}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
    setMessage
  );
}
export function updateProfile(data, setMessage) {
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
    setMessage
  );
}
