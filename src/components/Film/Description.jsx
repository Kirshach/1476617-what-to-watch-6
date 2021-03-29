import React from 'react';

import {filmPropTypes} from './_prop-types';
import {getVerboseRating} from './_helpers';
import {formatRating} from './_helpers';

const Description = ({film}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatRating(film.rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getVerboseRating(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and others</strong></p>
      </div>
    </>
  );
};

Description.propTypes = {
  film: filmPropTypes
};

export default Description;
