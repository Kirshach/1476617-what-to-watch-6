import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import VideoPlayer from '../VideoPlayer/VideoPlayer';

import {filmPropTypes} from '../../prop-types/film';

const TIMEOUT_BEFORE_PLAYING_PREVIEW = 500;

const MovieCard = ({
  id,
  name,
  previewImage,
  videoLink
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let clearingFunction;

    if (isHovered) {
      const playerTimeout = setTimeout(() => {
        setIsPlaying(true);
      }, TIMEOUT_BEFORE_PLAYING_PREVIEW);

      clearingFunction = () => {
        clearTimeout(playerTimeout);
      };
    }

    return clearingFunction;
  }, [isHovered]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setIsPlaying(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          alt={name}
          height={175}
          isPlaying={isPlaying}
          poster={previewImage}
          src={videoLink}
          width={280}
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

MovieCard.propTypes = filmPropTypes;

export default MovieCard;
