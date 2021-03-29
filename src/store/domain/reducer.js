import {ActionType} from './actions';

const FAVOURITE_FILMS = `favouriteFilms`;
const REVIEWS = `reviews`;
const PROMO = `promo`;
const FILMS = `films`;
const FILM = `film`;

const FILM_ID = `filmId`;
const DATA = `data`;

const initialState = {
  [FAVOURITE_FILMS]: null,
  [FILMS]: [],
  [FILM]: {},
  [PROMO]: {},
  [REVIEWS]: {
    [FILM_ID]: null,
    [DATA]: [],
  },
};

export const domainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM:
      return ({
        ...state,
        [FILM]: action.payload,
      });
    case ActionType.SET_FILMS:
      return ({
        ...state,
        [FILMS]: action.payload,
      });
    case ActionType.SET_FAVOURITE_FILMS:
      return ({
        ...state,
        [FAVOURITE_FILMS]: action.payload,
      });
    case ActionType.SET_PROMO:
      return ({
        ...state,
        [PROMO]: action.payload,
      });
    case ActionType.SET_REVIEWS:
      return ({
        ...state,
        [REVIEWS]: {
          [FILM_ID]: action.payload.id,
          [DATA]: action.payload.data,
        }
      });
    default:
      return state;
  }
};

export const DomainNS = {FILMS, FILM, PROMO, REVIEWS, FAVOURITE_FILMS};
