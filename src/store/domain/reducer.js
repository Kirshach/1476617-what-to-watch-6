import {ActionType} from './actions';

const FILMS = `films`;
const FILM = `film`;
const PROMO = `promo`;
const REVIEWS = `reviews`;

const FILM_ID = `filmId`;
const DATA = `data`;

const initialState = {
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

export const DomainNS = {FILMS, FILM, PROMO, REVIEWS};
