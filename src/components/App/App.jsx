import React from "react";
import {Router, Switch, Route} from "react-router-dom";

import {AppRoutes} from '../../const.js';

import AddReview from '../AddReview/AddReview';
import Film from "../Film/Film";
import Main from "../Main/Main";
import MyList from "../MyList/MyList";
import MoviePlayer from '../MoviePlayer/MoviePlayer';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SignIn from '../SignIn/SignIn';

import {history} from '../../history';

export const App = () => {
  return (
    <Router history={history}>
      <Switch>

        <Route exact path={AppRoutes.MAIN}>
          <Main />
        </Route>

        <PrivateRoute exact path={AppRoutes.ADD_REVIEW}>
          <AddReview/>
        </PrivateRoute>

        <Route exact path={AppRoutes.FILM}>
          <Film />
        </Route>

        <Route exact path={AppRoutes.LOGIN}>
          <SignIn/>
        </Route>

        <PrivateRoute exact path={AppRoutes.MY_LIST}>
          <MyList />
        </PrivateRoute>

        <Route exact path={AppRoutes.MOVIE_PLAYER}>
          <MoviePlayer />
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;
