import React from "react";

import MovieCard from '../MovieCard/MovieCard';

import {filmArrayPropTypes} from '../Film/_prop-types';

const MovieCardList = ({films}) => {
  return (
    <>
      {films
        .map((film) => (
          <MovieCard
            key={film.id}
            film={film}
          />))}
    </>
  );
};

MovieCardList.propTypes = {
  films: filmArrayPropTypes.isRequired,
};

export default MovieCardList;
