import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    films: state.domain.films,
    isLoadingFilms: state.app.isLoadingFilms,
  };
};

export const withFilms = (Component) => {
  const WithFilms = connect(mapStateToProps)(Component);
  return WithFilms;
};
