import React, {useState, useEffect} from 'react';
import {history} from '../../history';

import VideoPlayer from '../video-player/video-player';

import {filmPropTypes} from '../film/_prop-types';
import {AppRoutes} from '../../const';

const TIMEOUT_BEFORE_PLAYING_PREVIEW = 500;

const MovieCard = ({film}) => {
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
      onClick={() => history.push(AppRoutes.getFilmRoute(film.id))}
      style={{cursor: `pointer`}}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          alt={film.name}
          height={175}
          isPlaying={isPlaying}
          poster={film.previewImage}
          src={film.videoLink}
          width={280}
        />
      </div>
      <h3 className="small-movie-card__title"
        style={{pointerEvents: `none`}}
      >
        <span className="small-movie-card__link">
          {film.name}
        </span>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: filmPropTypes
};

export default React.memo(
    MovieCard,
    ({film: prevFilm}, {film}) => prevFilm.id === film.id
);
