import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {redirectMiddleware, handleAPIErrorMiddleware} from './middlewares';
import {checkAuthThunk} from '../store/app/auth/thunks';
import {fetchFilmsThunk} from '../store/domain/thunks';
import {rootReducer as reducer} from '../store/rootReducer';

import {api} from '../api/api';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            handleAPIErrorMiddleware,
            redirectMiddleware,
            thunk.withExtraArgument(api),
        ),
    ),
);

store.dispatch(checkAuthThunk());
store.dispatch(fetchFilmsThunk());

export {store};
