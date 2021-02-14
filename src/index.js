import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App";
import {films} from './mocks/films';

ReactDOM.render(
    <App films={films} />,
    document.getElementById(`root`)
);
