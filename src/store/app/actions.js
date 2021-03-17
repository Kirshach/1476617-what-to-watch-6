export const ActionType = {
  AUTHORIZE: `app/authorize`,
  REDIRECT: `app/redirect`,
  SET_REVIEWS_HAVE_LOADED: `app/setReviewsHaveLoaded`,
  SET_GENRE: `app/setGenre`,
  SET_FILM_HAS_LOADED: `app/setFilmHasLoaded`,
  SET_FILMS_HAVE_LOADED: `app/setFilmsHaveLoaded`,
  SET_IS_AUTHORIZED: `app/setIsAuthorized`,
  SET_IS_SENDING_REVIEW: `app/setIsSendingReview`,
  SET_USER_DATA: `app/setUserData`,
  SHOW_DEFAULT_FILMS_AMOUNT: `app/showDefaultFilmsAmount`,
  SHOW_MORE_FILMS: `app/showMoreFilms`,
};

export const redirectAction = (payload) => ({
  type: ActionType.REDIRECT,
  payload,
});

export const setFilmHasLoadedAction = (payload) => ({
  type: ActionType.SET_FILM_HAS_LOADED,
  payload,
});

export const setFilmsHaveLoadedAction = (payload) => ({
  type: ActionType.SET_FILMS_HAVE_LOADED,
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

export const setIsSendingReview = (payload) => ({
  type: ActionType.SET_IS_SENDING_REVIEW,
  payload,
});

export const setReviewsHaveLoaded = (payload) => ({
  type: ActionType.SET_REVIEWS_HAVE_LOADED,
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

