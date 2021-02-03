import React from "react";

import Home, {homePropTypes} from "../Home/Home";

const App = (props) => {
  return <Home {...props} />;
};

App.propTypes = homePropTypes;

export default App;
