import {ActionType} from './actions';
import {Genres} from '../../const';

export const FILMS_BATCH = 8;

const initialState = {
  filmsShowingCount: FILMS_BATCH,
  genre: Genres.allGenres,
  isAuthorized: false,
  isLoadingFilms: true,
  userData: {
    avatarUrl: null,
    email: null,
    name: null,
    id: null,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.SET_IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.payload,
      };
    case ActionType.SET_IS_LOADING_FILMS:
      return {
        ...state,
        isLoadingFilms: action.payload,
      };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.SHOW_DEFAULT_FILMS_AMOUNT:
      return {
        ...state,
        filmsShowingCount: FILMS_BATCH,
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        filmsShowingCount: state.filmsShowingCount + (action.payload || FILMS_BATCH),
      };
    default:
      return state;
  }
};
