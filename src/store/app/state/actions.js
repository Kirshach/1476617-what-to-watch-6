
const SHOW_DEFAULT_FILMS_AMOUNT = `app/showDefaultFilmsAmount`;
const SET_REVIEWS_HAVE_LOADED = `app/setReviewsHaveLoaded`;
const SET_FILMS_HAVE_LOADED = `app/setFilmsHaveLoaded`;
const SET_IS_SENDING_REVIEW = `app/setIsSendingReview`;
const SET_PROMO_HAS_LOADED = `app/setPromoHasLoaded`;
const SET_FILM_HAS_LOADED = `app/setFilmHasLoaded`;
const SHOW_MORE_FILMS = `app/showMoreFilms`;
const SET_GENRE = `app/setGenre`;

export const setFilmHasLoadedAction = (payload) => ({
  type: SET_FILM_HAS_LOADED,
  payload,
});

export const setFilmsHaveLoadedAction = (payload) => ({
  type: SET_FILMS_HAVE_LOADED,
  payload,
});

export const setGenreAction = (payload) => ({
  type: SET_GENRE,
  payload,
});

export const setIsSendingReviewAction = (payload) => ({
  type: SET_IS_SENDING_REVIEW,
  payload,
});

export const setReviewsHaveLoadedAction = (payload) => ({
  type: SET_REVIEWS_HAVE_LOADED,
  payload,
});

export const setPromoHasLoadedAction = (payload) => ({
  type: SET_PROMO_HAS_LOADED,
  payload,
});

export const showDefaultFilmsAmountAction = () => ({
  type: SHOW_DEFAULT_FILMS_AMOUNT,
});

export const showMoreFilmsAction = () => ({
  type: SHOW_MORE_FILMS,
});

export const ActionType = {
  SHOW_DEFAULT_FILMS_AMOUNT,
  SET_REVIEWS_HAVE_LOADED,
  SET_FILMS_HAVE_LOADED,
  SET_IS_SENDING_REVIEW,
  SET_FILM_HAS_LOADED,
  SET_PROMO_HAS_LOADED,
  SHOW_MORE_FILMS,
  SET_GENRE,
};

