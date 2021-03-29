import {history} from '../history';
import {setIsOnlineAction} from './app/state/actions';

const REDIRECT = `app/redirect`;
const HANDLE_API_ERROR = `app/handleAPIErrorAction`;

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
    if (action.payload) {
      console.log(action.payload);
      store.dispatch(setIsOnlineAction(false));
    }
  }
  return next(action);
};

// if (error.response.status === 404) {
//         dispatch(redirectAction(AppRoutes.PAGE_NOT_FOUND));
//       }
