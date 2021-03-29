import React from "react";
import {useSelector} from "react-redux";
import {Router, Switch, Route} from "react-router-dom";

import {isOnlineSelector} from "../../store/app/state/selectors.js";
import {AppRoutes} from '../../const.js';

import OfflineScreen from "../OfflineScreen/OfflineScreen.jsx";
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MoviePlayer from '../MoviePlayer/MoviePlayer';
import AddReview from '../AddReview/AddReview';
import Logout from "../Logout/Logout";
import MyList from "../MyList/MyList";
import SignIn from '../SignIn/SignIn';
import Film from "../Film/Film";
import Main from "../Main/Main";

import {history} from '../../history';


export const App = () => {
  const isOnline = useSelector(isOnlineSelector);

  return (
    <Router history={history}>
      {
        isOnline ? (
          <Switch>

            <Route exact path={AppRoutes.MAIN}>
              <Main />
            </Route>

            <PrivateRoute exact path={AppRoutes.ADD_REVIEW}>
              <AddReview />
            </PrivateRoute>

            <Route exact path={AppRoutes.FILM}>
              <Film />
            </Route>

            <Route exact path={AppRoutes.LOGIN}>
              <SignIn />
            </Route>

            <Route exact path={AppRoutes.LOGOUT}>
              <Logout/>
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
        ) : (
          <OfflineScreen />
        )
      }
    </Router>
  );
};

App.propTypes = {};

export default App;
