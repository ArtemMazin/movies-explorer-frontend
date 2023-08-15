export const { BASE_MOVIES_URL = 'https://api.nomoreparties.co' } = process.env;
export const { BASE_URL = 'https://api.diplom.mazinartem.nomoredomains.xyz' } = process.env;

export const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

export const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

export function filterShortMovies(movies) {
  return movies.filter((film) => {
    return film.duration <= 40;
  });
}

export function getFilteredMovies(arrayMovies, value) {
  return Array.from(arrayMovies).filter((item) => {
    return item.nameRU.toLowerCase().includes(value) || item.nameEN.toLowerCase().includes(value);
  });
}

export function filterSavedMovies(movies, movieID) {
  return movies.filter((newCard) => {
    return newCard._id !== movieID;
  });
}

export const messages = {
  SUCCESS_REGISTRATION: 'Регистрация прошла успешно',
  SUCCESS_LOGIN: 'Вы вошли в аккаунт',
  LOGOUT_SUCCESS: 'Вы вышли из аккаунта',
  SERVER_ERROR: 'На сервере произошла ошибка',
  ADD_MOVIE: 'Фильм добавлен в избранные',
  REMOVE_MOVIE: 'Фильм удален из избранных',
  KEY_WORD: 'Нужно ввести ключевое слово',
  UPDATE_PROFILE: 'Профиль сохранён',
  INPUT_EMAIL: 'Неверный формат почты',
  INPUT_NAME: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
};
