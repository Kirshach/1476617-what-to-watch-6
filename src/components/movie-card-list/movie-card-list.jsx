import React from 'react';

import MovieCard from '../movie-card/movie-card';

import {filmArrayPropTypes} from '../film/_prop-types';

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
