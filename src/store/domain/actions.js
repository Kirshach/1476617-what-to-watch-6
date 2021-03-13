export const ActionType = {
  SET_FILMS: `domain/setFilms`,
};

export const setFilms = (payload) => ({
  type: ActionType.SET_FILMS,
  payload,
});
