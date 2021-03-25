import {combineReducers} from 'redux';

import {appReducer} from './app/reducer';
import {domainReducer} from './domain/reducer';

const DOMAIN = `domain`;
const APP = `app`;

const rootReducer = combineReducers({
  [DOMAIN]: domainReducer,
  [APP]: appReducer,
});

export {rootReducer};

export const RootNS = {DOMAIN, APP};
