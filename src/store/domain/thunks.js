import {
  setFilmsAction,
  setFilmAction,
  setReviewsAction,
  setPromoAction,
} from './actions';

import {
  setFilmHasLoadedAction,
  setFilmsHaveLoadedAction,
  setIsSendingReviewAction,
  setReviewsHaveLoadedAction,
  setPromoHasLoadedAction,
} from '../app/state/actions';

import {
  getFilmAPIRoute,
  getCommentsAPIRoute,
  throwAPIRequestError
} from '../../api/api';

import {Subroutes} from '../../components/Film/_const';
import {APIRoutes, AppRoutes} from '../../const';
import {redirectAction} from '../middlewares';

export const fetchFilmThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setFilmHasLoadedAction(false));
  return api.get(getFilmAPIRoute(id))
    .then(({data}) => dispatch(setFilmAction(data)))
    .catch(({response: {status}}) => {
      if (status === 404) {
        dispatch(redirectAction(AppRoutes.PAGE_NOT_FOUND));
      } else {
        throw new Error(`Unhandled response status recieved on film fetch attempt`);
      }
    })
    .finally(() => dispatch(setFilmHasLoadedAction(true)));
};

export const fetchFilmsThunk = () => (dispatch, _getState, api) => {
  dispatch(setFilmsHaveLoadedAction(false));
  return api.get(APIRoutes.FILMS)
    .then(({data}) => dispatch(setFilmsAction(data)))
    .catch(({response}) => throwAPIRequestError(response, APIRoutes.FILMS))
    .finally(() => dispatch(setFilmsHaveLoadedAction(true)));
};

export const fetchPromoThunk = () => (dispatch, _getState, api) => {
  dispatch(setPromoHasLoadedAction(false));
  return api.get(APIRoutes.PROMO_FILM)
    .then(({data}) => dispatch(setPromoAction(data)))
    .catch(({response}) => throwAPIRequestError(response, APIRoutes.PROMO_FILM))
    .finally(() => dispatch(setPromoHasLoadedAction(true)));
};

export const fetchReviewsThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setReviewsHaveLoadedAction(false));
  return api.get(getCommentsAPIRoute(id))
    .then(({data}) => dispatch(setReviewsAction({id, data})))
    .catch(({response}) => throwAPIRequestError(response, getCommentsAPIRoute(id)))
    .finally(() => dispatch(setReviewsHaveLoadedAction(true)));
};

export const postReviewThunk = (id, reqBody) => (dispatch, _getState, api) => {
  dispatch(setIsSendingReviewAction(true));
  return api.post(getCommentsAPIRoute(id), reqBody)
    .then(() => dispatch(redirectAction(getFilmAPIRoute(id, Subroutes.reviews))))
    .finally(() => dispatch(setIsSendingReviewAction(false)));
};
