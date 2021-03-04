export const ActionType = {
  SET_GENRE: `app/genre/setGenre`,
  SHOW_MORE_FILMS: `app/filmsShowingCount/showMoreFilms`,
  SHOW_DEFAULT_FILMS_BATCH: `app/filmsShowingCount/showDefaultFilmsBarch`
};

export const setGenreAction = (payload) => ({
  type: ActionType.SET_GENRE,
  payload,
});

export const showMoreFilmsAction = () => ({
  type: ActionType.SHOW_MORE_FILMS,
});

export const showDefaultFilmsBatchAction = () => ({
  type: ActionType.SHOW_MORE_FILMS,
});
