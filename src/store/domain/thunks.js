import {
  setFilmsAction,
  setFilmAction,
  setReviewsAction,
} from './actions';
import {
  setFilmHasLoadedAction,
  setFilmsHaveLoadedAction,
  setIsSendingReview,
  setReviewsHaveLoaded,
} from '../app/actions';
import {getFilmAPIRoute, getCommentsAPIRoute} from '../../api/api';
import {APIRoutes} from '../../const';
import {history} from '../../history';
import {AppRoutes} from '../../const';

export const fetchFilmThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setFilmHasLoadedAction(false));
  return api.get(getFilmAPIRoute(id))
    .then(({data}) => {
      dispatch(setFilmAction(data));
    })
    .catch(({response: {status}}) => {
      if (status === 404) {
        history.push(AppRoutes.PAGE_NOT_FOUND);
      } else {
        throw new Error(`Unhandled response status recieved on film fetch attempt`);
      }
    })
    .finally(() => {
      dispatch(setFilmHasLoadedAction(true));
    });
};

export const fetchFilmsThunk = () => (dispatch, _getState, api) => {
  dispatch(setFilmsHaveLoadedAction(false));
  return api.get(APIRoutes.FILMS)
    .then(({data}) => {
      dispatch(setFilmsAction(data));
      dispatch(setFilmsHaveLoadedAction(true));
    })
    .finally(() => {
      dispatch(setFilmsHaveLoadedAction(true));
    });
};

export const fetchReviewsThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setReviewsHaveLoaded(false));
  return api.get(getCommentsAPIRoute(id))
    .then(({data}) => {
      dispatch(setReviewsAction({id, data}));
    })
    .catch(({response}) => {
      throw new Error(`Server responded with status ${response.status} "${response.data.error}" on ${getCommentsAPIRoute(id)} route fetch`);
    })
    .finally(() => {
      dispatch(setReviewsHaveLoaded(true));
    });
};

export const postReviewThunk = (id, reqBody) => (dispatch, _getState, api) => {
  dispatch(setIsSendingReview(true));
  return api.post(getCommentsAPIRoute(id), reqBody)
    .then((res) => {
      console.log(res);
    })
    .finally(() => {
      dispatch(setIsSendingReview(false));
    });
};
