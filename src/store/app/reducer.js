import {ActionType} from './actions';
import {Genres} from '../../const';

export const FILMS_BATCH = 8;

const initialState = {
  reviewsHaveLoaded: false,
  filmHasLoaded: false,
  filmsShowingCount: FILMS_BATCH,
  filmsHaveLoaded: false,
  genre: Genres.allGenres,
  isAuthorized: false,
  userData: {
    avatarUrl: null,
    email: null,
    name: null,
    id: null,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM_HAS_LOADED:
      return {
        ...state,
        filmHasLoaded: action.payload,
      };
    case ActionType.SET_FILMS_HAVE_LOADED:
      return {
        ...state,
        filmsHaveLoaded: action.payload,
      };
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
    case ActionType.SET_REVIEWS_HAVE_LOADED:
      return {
        ...state,
        reviewsHaveLoaded: action.payload,
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
