
const SET_FAVOURITE_FILMS = `domain/setFavouriteFilms`;
const SET_REVIEWS = `domain/setReviews`;
const SET_FILMS = `domain/setFilms`;
const SET_PROMO = `domain/setPromo`;
const SET_FILM = `domain/setFilm`;

export const setFilmAction = (payload) => ({
  type: SET_FILM,
  payload,
});

export const setFavouriteFilmsAction = (payload) => ({
  type: SET_FAVOURITE_FILMS,
  payload,
});

export const setFilmsAction = (payload) => ({
  type: SET_FILMS,
  payload,
});

export const setPromoAction = (payload) => ({
  type: SET_PROMO,
  payload,
});

export const setReviewsAction = (payload) => ({
  type: SET_REVIEWS,
  payload,
});

export const ActionType = {
  SET_FAVOURITE_FILMS,
  SET_REVIEWS,
  SET_FILMS,
  SET_PROMO,
  SET_FILM,
};
