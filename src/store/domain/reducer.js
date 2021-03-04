import {films} from '../../mocks/films';
import {Genres} from '../../const';

const initialState = {
  films,
  genres: Object.values(Genres)
};

export const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
