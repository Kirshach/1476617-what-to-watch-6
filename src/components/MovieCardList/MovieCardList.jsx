import React from "react";
import PropTypes from 'prop-types';

import {Genres} from '../../const';
import MovieCard from '../MovieCard/MovieCard';

import {filmArrayPropTypes} from '../../prop-types/film';

const MovieCardList = ({genre, films}) => {
  const filterFilms = (film) => genre === Genres.allGenres ? true : film.genre === genre;
  return (
    <>
      {films
        .filter(filterFilms)
        .map((film) => (
          <MovieCard
            key={film.id}
            film={film}
          />
        ))
      }
    </>
  );
};

MovieCardList.propTypes = {
  genre: PropTypes.string.isRequired,
  films: filmArrayPropTypes.isRequired,
};

export default MovieCardList;
