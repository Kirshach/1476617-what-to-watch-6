export const ActionType = {
  SET_GENRE: `app/genre/setGenre`,
  SET_IS_LOADING_FILMS: `app/isShowingFilms/setIsShowingFilms`,
  SHOW_MORE_FILMS: `app/filmsShowingCount/showMoreFilms`,
  SHOW_DEFAULT_FILMS_BATCH: `app/filmsShowingCount/showDefaultFilmsBarch`
};

export const setGenreAction = (payload) => ({
  type: ActionType.SET_GENRE,
  payload,
});

export const setIsLoadingFilms = (payload) => ({
  type: ActionType.SET_IS_LOADING_FILMS,
  payload,
});

export const showMoreFilmsAction = () => ({
  type: ActionType.SHOW_MORE_FILMS,
});

export const showDefaultFilmsBatchAction = () => ({
  type: ActionType.SHOW_MORE_FILMS,
});
