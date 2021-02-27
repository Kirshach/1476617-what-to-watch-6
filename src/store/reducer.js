import {ActionType} from './actions';
import {Genres} from '../const';
import {films} from '../mocks/films';


const initialState = {
  films,
  genre: Genres.allGenres,
  genres: Object.values(Genres),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
