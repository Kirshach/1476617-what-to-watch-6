import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types';

import AddReview from '../AddReview/AddReview';
import Film from "../Film/Film";
import Main from "../Main/Main";
import MyList from "../MyList/MyList";
import Player from '../Player/Player';
import PageNotFound from '../PageNotFound/PageNotFound';
import SignIn from '../SignIn/SignIn';

import {filmPropTypes} from '../../prop-types/film';

const App = ({films}) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main films={films} film={films[0]}/>
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview films={films}/>
        </Route>

        <Route exact path="/films/:id">
          <Film films={films}/>
        </Route>

        <Route exact path="/login">
          <SignIn/>
        </Route>

        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>

        <Route exact path="/player/:id">
          <Player films={films}/>
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes))};

export default App;
