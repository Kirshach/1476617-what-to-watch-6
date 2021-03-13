export const ActionType = {
  AUTHORIZE: `app/authorize`,
  REDIRECT: `app/redirect`,
  SET_IS_AUTHORIZED: `app/setIsAuthorized`,
  SET_GENRE: `app/setGenre`,
  SET_IS_LOADING_FILMS: `app/setIsShowingFilms`,
  SET_USER_DATA: `app/setUserData`,
  SHOW_DEFAULT_FILMS_AMOUNT: `app/showDefaultFilmsAmount`,
  SHOW_MORE_FILMS: `app/showMoreFilms`,
};

export const redirectAction = (payload) => ({
  type: ActionType.REDIRECT,
  payload,
});

export const setGenreAction = (payload) => ({
  type: ActionType.SET_GENRE,
  payload,
});

export const setIsAuthorizedAction = (payload) => ({
  type: ActionType.SET_IS_AUTHORIZED,
  payload,
});

export const setIsLoadingFilmsAction = (payload) => ({
  type: ActionType.SET_IS_LOADING_FILMS,
  payload,
});

export const setUserDataAction = (payload) => ({
  type: ActionType.SET_USER_DATA,
  payload,
});

export const showDefaultFilmsAmountAction = () => ({
  type: ActionType.SHOW_DEFAULT_FILMS_AMOUNT,
});

export const showMoreFilmsAction = () => ({
  type: ActionType.SHOW_MORE_FILMS,
});

