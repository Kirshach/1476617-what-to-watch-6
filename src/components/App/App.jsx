import React from 'react';
import {useSelector} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';

import {isOnlineSelector} from '../../store/app/state/selectors.js';
import {AppRoutes} from '../../const.js';

import OfflineScreen from '../offline-screen/offline-screen.jsx';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import MoviePlayer from '../movie-player/movie-player';
import AddReview from '../add-review/add-review';
import Logout from '../logout/logout';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import Main from '../main/main';

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
