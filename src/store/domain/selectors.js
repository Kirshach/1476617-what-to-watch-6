import {RootNS} from '../root-reducer';
import {DomainNS} from './reducer';

const {DOMAIN} = RootNS;
const {FILM, FILMS, PROMO, REVIEWS, FAVOURITE_FILMS} = DomainNS;

const getStateSlice = (state) => state[DOMAIN];

export const favouriteFilmsSelector = (state) => getStateSlice(state)[FAVOURITE_FILMS];
export const reviewsSelector = (state) => getStateSlice(state)[REVIEWS];
export const filmsSelector = (state) => getStateSlice(state)[FILMS];
export const promoSelector = (state) => getStateSlice(state)[PROMO];
export const filmSelector = (state) => getStateSlice(state)[FILM];
