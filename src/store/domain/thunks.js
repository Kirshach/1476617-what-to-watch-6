import {
  setFilmsAction,
  setFilmAction,
  setReviewsAction,
} from './actions';
import {
  setReviewsHaveLoaded,
  setFilmHasLoadedAction,
  setFilmsHaveLoadedAction,
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
      dispatch(setFilmHasLoadedAction(true));
    })
    .catch(({response: {status}}) => {
      if (status === 404) {
        history.push(AppRoutes.PAGE_NOT_FOUND);
      } else {
        throw new Error(`Unhandled response status recieved on film fetch attempt`);
      }
    });
};

export const fetchFilmsThunk = () => (dispatch, _getState, api) => {
  dispatch(setFilmsHaveLoadedAction(false));
  return api.get(APIRoutes.FILMS)
    .then(({data}) => {
      dispatch(setFilmsAction(data));
      dispatch(setFilmsHaveLoadedAction(true));
    });
};

export const fetchReviewsThunk = (id) => (dispatch, _getState, api) => {
  dispatch(setReviewsHaveLoaded(false));
  return api.get(getCommentsAPIRoute(id))
    .then(({data}) => {
      dispatch(setReviewsAction({id, data}));
      dispatch(setReviewsHaveLoaded(true));
    })
    .catch(({response: {data}}) => {
      throw new Error(`Uncaught error on ${getCommentsAPIRoute(id)} route fetch: server responded with "${data.error}"`);
    });
};
