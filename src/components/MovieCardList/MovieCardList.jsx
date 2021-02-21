import React from "react";
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';

import {filmPropTypes} from '../../prop-types/film';

const MovieCardList = ({films}) => {
  return (
    <>
      {films.map((film) => (
        <MovieCard
          key={film.id}
          {...film}
        />)
      )}
    </>
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  )
};

export default MovieCardList;
