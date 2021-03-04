import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer as reducer} from './store/rootReducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

import App from "./components/App/App";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
