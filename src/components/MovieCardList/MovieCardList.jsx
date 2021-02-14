import React, {useState} from "react";
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';

import {filmPropTypes} from '../../prop-types/film';

const MovieCardList = ({films}) => {
  const [, setActiveCard] = useState(films[0]);

  const onMovieCardHover = (index) => {
    setActiveCard(films[index]);
  };

  return (
    <>
      {films.map((film, index) => <MovieCard onHover={() => onMovieCardHover(index)} key={film.id} {...film}/>)}
    </>
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  )
};

export default MovieCardList;
