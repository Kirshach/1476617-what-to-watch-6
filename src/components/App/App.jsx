import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import AddReview from '../AddReview/AddReview';
import Film from "../Film/Film";
import Main from "../Main/Main";
import MyList from "../MyList/MyList";
import MoviePlayer from '../MoviePlayer/MoviePlayer';
import PageNotFound from '../PageNotFound/PageNotFound';
import SignIn from '../SignIn/SignIn';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview/>
        </Route>

        <Route exact path="/films/:id/:tab?">
          <Film />
        </Route>

        <Route exact path="/login">
          <SignIn/>
        </Route>

        <Route exact path="/mylist">
          <MyList />
        </Route>

        <Route exact path="/player/:id">
          <MoviePlayer />
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
