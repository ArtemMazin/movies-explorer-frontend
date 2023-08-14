import { BASE_MOVIES_URL } from './constants';

function getResponseData(res, setMessage) {
  if (!res.ok) {
    throw new Error(setMessage);
  }
  return res.json();
}
async function request(url, setMessage) {
  const res = await fetch(`${BASE_MOVIES_URL}${url}`);
  return getResponseData(res, setMessage);
}

export function getMovies() {
  return request(
    '/beatfilm-movies',
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
  );
}
