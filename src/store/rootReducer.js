import {combineReducers} from 'redux';

import {appReducer} from './app/reducer';
import {domainReducer} from './domain/reducer';

const rootReducer = combineReducers({
  domain: domainReducer,
  app: appReducer,
});

export {rootReducer};
