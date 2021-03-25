
const SET_FILM = `domain/setFilm`;
const SET_FILMS = `domain/setFilms`;
const SET_PROMO = `domain/setPromo`;
const SET_REVIEWS = `domain/setReviews`;

export const setFilmAction = (payload) => ({
  type: SET_FILM,
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
  SET_FILM,
  SET_FILMS,
  SET_PROMO,
  SET_REVIEWS,
};
