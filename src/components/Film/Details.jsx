import React, {Fragment} from 'react';

import {filmPropTypes} from '../../prop-types/film';

import {getRunTime} from '../../utils/getRunTime';

const Details = ({film}) => {
  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.map((item, index) => (
                <Fragment key={item}>
                  {index === film.starring.length - 1
                    ? item
                    : <>{item}, <br/></>
                  }
                </Fragment>
              ))}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getRunTime(film.runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  film: filmPropTypes
};

export default Details;
