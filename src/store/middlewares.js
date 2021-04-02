import {setIsOnlineAction} from './app/state/actions';
import {history} from '../history';
import {AppRoutes} from '../const';

export const REDIRECT = `app/redirect`;
export const HANDLE_API_ERROR = `app/handleAPIErrorAction`;

export const Middlewares = {
  REDIRECT,
  HANDLE_API_ERROR,
};

export const redirectAction = (payload) => ({
  type: REDIRECT,
  payload,
});

export const handleAPIErrorAction = (payload) => ({
  type: HANDLE_API_ERROR,
  payload
});

export const redirectMiddleware = (_store) => (next) => (action) => {
  if (action.type === REDIRECT) {
    history.push(action.payload);
  }
  return next(action);
};

export const handleAPIErrorMiddleware = (store) => (next) => (action) => {
  if (action.type === HANDLE_API_ERROR) {
    if (
      (!action.payload || !action.payload.response) && !window.navigator.onLine
      || action.payload.code === `ECONNABORTED`
    ) {
      store.dispatch(setIsOnlineAction(false));
    } else if (action.payload.response && action.payload.response.status === 404) {
      store.dispatch(redirectAction(AppRoutes.PAGE_NOT_FOUND));
    } else {
      throw new Error(`Unknown API request error: ${action.payload}`);
    }
  }
  return next(action);
};
