import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchFilmThunk} from '../store/domain/thunks';
import {filmArrayPropTypes} from '../prop-types/film';

const mapStateToProps = (state) => ({
  film: state.domain.film,
  films: state.domain.films,
  filmHasLoaded: state.app.filmHasLoaded,
  filmsHaveLoaded: state.app.filmsHaveLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchFilmThunk: (id) => dispatch(fetchFilmThunk(id)),
});

export const withFilmAndFilms = (Component) => {
  const WithFilmAndFilms = connect(
      mapStateToProps,
      mapDispatchToProps
  )(Component);
  return WithFilmAndFilms;
};

export const withFilmAndFilmsPropTypes = {
  dispatchFetchFilmThunk: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  films: filmArrayPropTypes,
  filmHasLoaded: PropTypes.bool.isRequired,
  filmsHaveLoaded: PropTypes.bool.isRequired,
};
