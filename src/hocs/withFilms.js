import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {filmArrayPropTypes} from '../prop-types/film';

const mapStateToProps = (state) => {
  return {
    films: state.domain.films,
    filmsHaveLoaded: state.app.filmsHaveLoaded,
  };
};

export const withFilms = (Component) => {
  const WithFilms = connect(mapStateToProps)(Component);
  return WithFilms;
};

export const withFilmsPropTypes = {
  films: filmArrayPropTypes,
  filmsHaveLoaded: PropTypes.bool.isRequired,
};
