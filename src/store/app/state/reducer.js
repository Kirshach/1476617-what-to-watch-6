import {Genres} from '../../../const';
import {ActionType} from './actions';

export const FILMS_BATCH = 8;

const REVIEWS_HAVE_LOADED = `reviewsHaveLoaded`;
const FILMS_SHOWING_COUNT = `filmsShowingCount`;
const FILMS_HAVE_LOADED = `filmsHaveLoaded`;
const PROMO_HAS_LOADED = `promoHasLoaded`;
const FILM_HAS_LOADED = `filmHasLoaded`;
const GENRE = `genre`;

const initialState = {
  [REVIEWS_HAVE_LOADED]: false,
  [FILMS_HAVE_LOADED]: false,
  [PROMO_HAS_LOADED]: false,
  [FILM_HAS_LOADED]: false,

  [FILMS_SHOWING_COUNT]: FILMS_BATCH,
  [GENRE]: Genres.allGenres,
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM_HAS_LOADED:
      return {
        ...state,
        [FILM_HAS_LOADED]: action.payload,
      };
    case ActionType.SET_FILMS_HAVE_LOADED:
      return {
        ...state,
        [FILMS_HAVE_LOADED]: action.payload,
      };
    case ActionType.SET_PROMO_HAS_LOADED:
      return {
        ...state,
        [PROMO_HAS_LOADED]: action.payload,
      };
    case ActionType.SET_GENRE:
      return {
        ...state,
        [GENRE]: action.payload,
      };
    case ActionType.SET_REVIEWS_HAVE_LOADED:
      return {
        ...state,
        [REVIEWS_HAVE_LOADED]: action.payload,
      };
    case ActionType.SHOW_DEFAULT_FILMS_AMOUNT:
      return {
        ...state,
        [FILMS_SHOWING_COUNT]: FILMS_BATCH,
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        [FILMS_SHOWING_COUNT]: state[FILMS_SHOWING_COUNT] + (action.payload || FILMS_BATCH),
      };
    default:
      return state;
  }
};

export const StateNS = {
  REVIEWS_HAVE_LOADED,
  FILMS_SHOWING_COUNT,
  FILMS_HAVE_LOADED,
  PROMO_HAS_LOADED,
  FILM_HAS_LOADED,
  GENRE,
};
