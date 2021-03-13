import {history} from '../../history';
import {ActionType} from './actions';

export const redirectMiddleware = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    history.push(action.payload);
  }
  return next(action);
};
