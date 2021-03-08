import {ActionType} from './actions';
import {Genres} from '../../const';

export const FILMS_BATCH = 8;

const initialState = {
  filmsShowingCount: FILMS_BATCH,
  genre: Genres.allGenres,
  isLoadingFilms: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.SET_IS_LOADING_FILMS:
      return {
        ...state,
        isLoadingFilms: action.payload
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        filmsShowingCount: state.filmsShowingCount + (action.payload || FILMS_BATCH),
      };
    case ActionType.SHOW_DEFAULT_FILMS_BATCH:
      return {
        ...state,
        filmsShowingCount: state.filmsShowingCount + (action.payload || FILMS_BATCH),
      };
    default:
      return state;
  }
};
