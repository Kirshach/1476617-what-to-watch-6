import {RootNS} from '../../root-reducer';
import {AppNS} from '../reducer';
import {StateNS} from './reducer';

const {APP} = RootNS;
const {STATE} = AppNS;
const {
  FAVOURITE_FILMS_HAVE_LOADED,
  REVIEWS_HAVE_LOADED,
  FILMS_HAVE_LOADED,
  PROMO_HAS_LOADED,
  FILM_HAS_LOADED,
  IS_ONLINE,
  GENRE,
} = StateNS;

const getStateSlice = (state) => state[APP][STATE];

export const favouriteFilmsHaveLoadedSelector = (state) => getStateSlice(state)[FAVOURITE_FILMS_HAVE_LOADED];
export const reviewsHaveLoadedSelector = (state) => getStateSlice(state)[REVIEWS_HAVE_LOADED];
export const filmsHaveLoadedSelector = (state) => getStateSlice(state)[FILMS_HAVE_LOADED];
export const promoHasLoadedSelector = (state) => getStateSlice(state)[PROMO_HAS_LOADED];
export const filmHasLoadedSelector = (state) => getStateSlice(state)[FILM_HAS_LOADED];
export const isOnlineSelector = (state) => getStateSlice(state)[IS_ONLINE];
export const genreSelector = (state) => getStateSlice(state)[GENRE];
