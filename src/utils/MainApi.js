import { BASE_URL } from './constants';

function getResponseData(res, setErrorMessage) {
  if (!res.ok) {
    console.log('оп');
    //получаем ответ от сервера с текстом ошибки, чтобы передать его в попап
    res.text().then((text) => {
      // setErrorMessage(JSON.parse(text).message || JSON.parse(text).error);
    });
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

async function request(url, options, setErrorMessage) {
  const res = await fetch(`${BASE_URL}${url}`, options);
  return getResponseData(res, setErrorMessage);
}

export function register(name, email, password, setErrorMessageRegister) {
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
    setErrorMessageRegister
  );
}

export function login(email, password, setErrorMessageLogin) {
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
    setErrorMessageLogin
  ).then((data) => {
    if (data) {
      localStorage.setItem('token', 'isLoggedIn');
      return data;
    }
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

export function saveMovie(
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
  return request('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
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
      nameEN,
    }),
  });
}
