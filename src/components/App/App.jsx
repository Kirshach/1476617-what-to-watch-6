import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import AddReview from '../AddReview/AddReview';
import Film from "../Film/Film";
import Main, {mainPropTypes} from "../Main/Main";
import MyList from "../MyList/MyList";
import Player from '../Player/Player';
import PageNotFound from '../PageNotFound/PageNotFound';
import SignIn from '../SignIn/SignIn';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main {...props} />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview/>
        </Route>

        <Route exact path="/films/:id">
          <Film/>
        </Route>

        <Route exact path="/login">
          <SignIn/>
        </Route>

        <Route exact path="/mylist">
          <MyList/>
        </Route>

        <Route exact path="/player/:id">
          <Player/>
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = mainPropTypes;

export default App;
