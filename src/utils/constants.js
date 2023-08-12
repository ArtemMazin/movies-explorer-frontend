export const { BASE_MOVIES_URL = 'https://api.nomoreparties.co' } = process.env;
export const { BASE_URL = 'https://api.diplom.mazinartem.nomoredomains.xyz' } = process.env;

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
