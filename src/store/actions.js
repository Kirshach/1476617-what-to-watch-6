export const ActionType = {
  SET_GENRE: `films/setGenre`,
};

export const setGenre = (payload) => ({
  type: ActionType.SET_GENRE,
  payload
});
