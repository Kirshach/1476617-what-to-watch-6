import {AllGenres} from '../../../const';
import {ActionType} from './actions';

const FAVOURITE_FILMS_HAVE_LOADED = `favouriteFilmsHaveLoaded`;
const REVIEWS_HAVE_LOADED = `reviewsHaveLoaded`;
const FILMS_HAVE_LOADED = `filmsHaveLoaded`;
const PROMO_HAS_LOADED = `promoHasLoaded`;
const FILM_HAS_LOADED = `filmHasLoaded`;
const IS_ONLINE = `isOnline`;
const GENRE = `genre`;

const initialState = {
  [FAVOURITE_FILMS_HAVE_LOADED]: false,
  [REVIEWS_HAVE_LOADED]: false,
  [FILMS_HAVE_LOADED]: false,
  [PROMO_HAS_LOADED]: false,
  [FILM_HAS_LOADED]: false,
  [IS_ONLINE]: true,

  [GENRE]: AllGenres,
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM_HAS_LOADED:
      return {
        ...state,
        [FILM_HAS_LOADED]: action.payload,
      };
    case ActionType.SET_FAVOURITE_FILMS_HAVE_LOADED:
      return {
        ...state,
        [FAVOURITE_FILMS_HAVE_LOADED]: action.payload,
      };
    case ActionType.SET_FILMS_HAVE_LOADED:
      return {
        ...state,
        [FILMS_HAVE_LOADED]: action.payload,
      };
    case ActionType.SET_IS_ONLINE:
      return {
        ...state,
        [IS_ONLINE]: action.payload,
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
    default:
      return state;
  }
};

export const StateNS = {
  FAVOURITE_FILMS_HAVE_LOADED,
  REVIEWS_HAVE_LOADED,
  FILMS_HAVE_LOADED,
  PROMO_HAS_LOADED,
  FILM_HAS_LOADED,
  IS_ONLINE,
  GENRE,
};
