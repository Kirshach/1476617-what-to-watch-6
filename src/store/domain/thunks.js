import {
  setFavouriteFilmsAction,
  setReviewsAction,
  setFilmsAction,
  setPromoAction,
  setFilmAction,
} from './actions';

import {
  setFavouriteFilmsHaveLoaded,
  setReviewsHaveLoadedAction,
  setFilmsHaveLoadedAction,
  setPromoHasLoadedAction,
  setFilmHasLoadedAction,
} from '../app/state/actions';

import {
  getFavouriteFilmStatusAPIRoute,
  getFilmAPIRoute,
  getCommentsAPIRoute,
  throwAPIRequestError,
} from '../../api/api';

import {redirectAction, handleAPIErrorAction} from '../middlewares';
import {Subroutes} from '../../components/Film/_const';
import {APIRoutes} from '../../const';
import {filmsSelector} from './selectors';

const updateFilmsArrayWithNewFilm = (films, film, id) => {
  const newFilms = films.slice();
  newFilms[films.findIndex((item) => item.id === id)] = film;
  return newFilms;
};

export const fetchFilmThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setFilmHasLoadedAction(false));
  return api.get(getFilmAPIRoute(id))
    .then(({data}) => dispatch(setFilmAction(data)))
    .catch((error) => dispatch(handleAPIErrorAction(error)))
    .finally(() => dispatch(setFilmHasLoadedAction(true)));
};

export const fetchFilmsThunk = () => (dispatch, _getState, api) => {
  dispatch(setFilmsHaveLoadedAction(false));
  return api.get(APIRoutes.FILMS)
    .then(({data}) => dispatch(setFilmsAction(data)))
    .catch((error) => {
      dispatch(handleAPIErrorAction(error));
      throwAPIRequestError(error, APIRoutes.FILMS);
    })
    .finally(() => dispatch(setFilmsHaveLoadedAction(true)));
};

export const fetchFavouriteFilmsThunk = () => (dispatch, _getState, api) => {
  dispatch(setFavouriteFilmsHaveLoaded(false));
  return api.get(APIRoutes.FAVOURITE)
    .then(({data}) => dispatch(setFavouriteFilmsAction(data)))
    .catch((error) => {
      dispatch(handleAPIErrorAction(error));
      throwAPIRequestError(error, APIRoutes.FAVOURITE);
    })
    .finally(() => dispatch(setFavouriteFilmsHaveLoaded(true)));
};

export const fetchPromoThunk = () => (dispatch, _getState, api) => {
  dispatch(setPromoHasLoadedAction(false));
  return api.get(APIRoutes.PROMO_FILM)
    .then(({data}) => dispatch(setPromoAction(data)))
    .catch((error) => {
      dispatch(handleAPIErrorAction(error));
      throwAPIRequestError(error, APIRoutes.PROMO_FILM);
    })
    .finally(() => dispatch(setPromoHasLoadedAction(true)));
};

export const fetchReviewsThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setReviewsHaveLoadedAction(false));
  return api.get(getCommentsAPIRoute(id))
  .then(({data}) => dispatch(setReviewsAction({id, data})))
  .catch((error) => {
    dispatch(handleAPIErrorAction(error));
    throwAPIRequestError(error, getCommentsAPIRoute(id));
  })
    .finally(() => dispatch(setReviewsHaveLoadedAction(true)));
};

export const postReviewThunk = (id, reqBody) => (dispatch, _getState, api) => {
  return api.post(getCommentsAPIRoute(id), reqBody)
    .then(() => {
      dispatch(fetchReviewsThunk(id));
      dispatch(redirectAction(getFilmAPIRoute(id, Subroutes.reviews)));
    })
    .catch((error) => dispatch(handleAPIErrorAction(error)));
};

export const postFavouriteFilmStatus = (id, status) => (dispatch, getState, api) => {
  return api.post(getFavouriteFilmStatusAPIRoute(id, status))
    .then(({data}) => {
      const state = getState();
      const newFilms = updateFilmsArrayWithNewFilm(filmsSelector(state), data, id);
      dispatch(setFilmsAction(newFilms));
      dispatch(fetchFavouriteFilmsThunk());
      return data;
    })
    .catch((error) => dispatch(handleAPIErrorAction(error)));
};
