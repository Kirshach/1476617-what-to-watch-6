import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    films: state.domain.films
  };
};

export const withFilms = (Component) => connect(mapStateToProps)(Component);
