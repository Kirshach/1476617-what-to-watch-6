import {ActionType} from './actions';
import {Genres} from '../../const';

const initialState = {
  films: [],
  genres: Object.values(Genres)
};

export const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILMS:
      return ({
        ...state,
        films: action.payload
      });
    default:
      return state;
  }
};
