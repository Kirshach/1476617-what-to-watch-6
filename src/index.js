import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
};

ReactDOM.render(
    <App {...movie} />,
    document.getElementById(`root`)
);
