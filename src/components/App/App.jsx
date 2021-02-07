import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home, {homePropTypes} from "../Home/Home";
import PageNotFound from '../PageNotFound/PageNotFound';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home {...props} />
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = homePropTypes;

export default App;
