const SET_FAVOURITE_FILMS_HAVE_LOADED = `app/setFavouriteFilmsHaveLoaded`;
const SET_REVIEWS_HAVE_LOADED = `app/setReviewsHaveLoaded`;
const SET_FILMS_HAVE_LOADED = `app/setFilmsHaveLoaded`;
const SET_PROMO_HAS_LOADED = `app/setPromoHasLoaded`;
const SET_FILM_HAS_LOADED = `app/setFilmHasLoaded`;
const SET_IS_ONLINE = `app/setIsOnline`;
const SET_GENRE = `app/setGenre`;

export const setFilmHasLoadedAction = (payload) => ({
  type: SET_FILM_HAS_LOADED,
  payload,
});

export const setFilmsHaveLoadedAction = (payload) => ({
  type: SET_FILMS_HAVE_LOADED,
  payload,
});

export const setFavouriteFilmsHaveLoaded = (payload) => ({
  type: SET_FAVOURITE_FILMS_HAVE_LOADED,
  payload,
});

export const setGenreAction = (payload) => ({
  type: SET_GENRE,
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

export const setIsOnlineAction = (payload) => ({
  type: SET_IS_ONLINE,
  payload,
});

export const ActionType = {
  SET_FAVOURITE_FILMS_HAVE_LOADED,
  SET_REVIEWS_HAVE_LOADED,
  SET_FILMS_HAVE_LOADED,
  SET_PROMO_HAS_LOADED,
  SET_FILM_HAS_LOADED,
  SET_IS_ONLINE,
  SET_GENRE,
};

