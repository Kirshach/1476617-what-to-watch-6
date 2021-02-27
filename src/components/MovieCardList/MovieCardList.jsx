import React from "react";

import MovieCard from '../MovieCard/MovieCard';

import {filmArrayPropTypes} from '../../prop-types/film';

const MovieCardList = ({films}) => {
  return (
    <>
      {films.map((film) => (
        <MovieCard
          key={film.id}
          film={film}
        />)
      )}
    </>
  );
};

MovieCardList.propTypes = {
  films: filmArrayPropTypes
};

export default MovieCardList;
