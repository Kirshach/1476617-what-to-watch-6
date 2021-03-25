import {RootNS} from '../../rootReducer';
import {AppNS} from '../reducer';
import {StateNS} from './reducer';

const {APP} = RootNS;
const {STATE} = AppNS;
const {
  REVIEWS_HAVE_LOADED,
  FILMS_SHOWING_COUNT,
  FILMS_HAVE_LOADED,
  PROMO_HAS_LOADED,
  FILM_HAS_LOADED,
  GENRE,
} = StateNS;

const getStateSlice = (state) => state[APP][STATE];

export const filmsShowingCountSelector = (state) => getStateSlice(state)[FILMS_SHOWING_COUNT];
export const reviewsHaveLoadedSelector = (state) => getStateSlice(state)[REVIEWS_HAVE_LOADED];
export const filmsHaveLoadedSelector = (state) => getStateSlice(state)[FILMS_HAVE_LOADED];
export const promoHasLoadedSelector = (state) => getStateSlice(state)[PROMO_HAS_LOADED];
export const filmHasLoadedSelector = (state) => getStateSlice(state)[FILM_HAS_LOADED];
export const genreSelector = (state) => getStateSlice(state)[GENRE];
