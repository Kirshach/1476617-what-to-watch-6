import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {filmPropTypes} from '../../prop-types/film';

const MovieCard = ({id, name, previewImage, onHover}) => {
  return (
    <article onMouseOver={onHover} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {...filmPropTypes, onHover: PropTypes.func};

export default MovieCard;
