export const ActionType = {
  SET_REVIEWS: `domain/setReviews`,
  SET_FILM: `domain/setFilm`,
  SET_FILMS: `domain/setFilms`,
};


export const setFilmAction = (payload) => ({
  type: ActionType.SET_FILM,
  payload,
});

export const setFilmsAction = (payload) => ({
  type: ActionType.SET_FILMS,
  payload,
});

export const setReviewsAction = (payload) => ({
  type: ActionType.SET_REVIEWS,
  payload,
});
