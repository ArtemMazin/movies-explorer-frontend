const { BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies' } = process.env;

function getResponseData(res, setErrorMessage) {
  if (!res.ok) {
    return Promise.reject(setErrorMessage);
  }
  return res.json();
}
async function request(url, setErrorMessage) {
  const res = await fetch(`${BASE_URL}${url}`);
  return getResponseData(res, setErrorMessage);
}

export function getMovies() {
  return request(
    '/',
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
  );
}
