import {ActionType} from './actions';
import {Genres} from '../../const';

const initialState = {
  films: [],
  film: {},
  genres: Object.values(Genres),
  reviews: {
    filmId: null,
    data: [],
  },
};

export const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM:
      return ({
        ...state,
        film: action.payload
      });
    case ActionType.SET_FILMS:
      return ({
        ...state,
        films: action.payload
      });
    case ActionType.SET_REVIEWS:
      return ({
        ...state,
        reviews: {
          filmId: action.payload.id,
          data: action.payload.data,
        }
      });
    default:
      return state;
  }
};
