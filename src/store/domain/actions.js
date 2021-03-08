export const ActionType = {
  SET_FILMS: `domain/films/setFilms`,
};

export const setFilms = (payload) => ({
  type: ActionType.SET_FILMS,
  payload,
});
