import {RootNS} from '../rootReducer';
import {DomainNS} from './reducer';

const {DOMAIN} = RootNS;
const {FILM, FILMS, PROMO, REVIEWS} = DomainNS;

const getStateSlice = (state) => state[DOMAIN];

export const filmSelector = (state) => getStateSlice(state)[FILM];
export const filmsSelector = (state) => getStateSlice(state)[FILMS];
export const promoSelector = (state) => getStateSlice(state)[PROMO];
export const reviewsSelector = (state) => getStateSlice(state)[REVIEWS];
