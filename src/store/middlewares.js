import {history} from '../history';

export const redirectActionType = `app/redirect`;

export const redirectAction = (payload) => ({
  type: redirectActionType,
  payload,
});

export const redirectMiddleware = (_store) => (next) => (action) => {
  if (action.type === redirectActionType) {
    history.push(action.payload);
  }
  return next(action);
};
