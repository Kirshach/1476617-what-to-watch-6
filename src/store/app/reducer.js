import {combineReducers} from 'redux';

import {authReducer} from './auth/reducer';
import {stateReducer} from './state/reducer';

const AUTH = `auth`;
const STATE = `state`;

export const appReducer = combineReducers({
  auth: authReducer,
  state: stateReducer,
});

export const AppNS = {
  AUTH,
  STATE,
};
