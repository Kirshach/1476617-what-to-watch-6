import React, {useRef, useState, useEffect, useCallback} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import {useNavigation} from '../../hooks/useNavigation';
import {useFilm} from '../../hooks/useFilm';
import {
  formatDuration,
  getTogglerRelativePos,
  getTimestamp,
} from './_helpers';

const MoviePlayer = () => {
  const progressBarRef = useRef();
  const intervalRef = useRef(null);
  const videoRef = useRef();

  const [isWaiting, setIsWaiting] = useState(false);
  const [togglerTemporaryPos, setTogglerTemporaryPos] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);

  const {goBack} = useNavigation();
  const {id} = useParams();

  const {film, filmHasLoaded} = useFilm(id);

  if (filmHasLoaded && !film.id) {
    return <Redirect to="/404" />;
  }

  const handleExitButtonClick = () => goBack();

  const handleVideoLoadedMetaData = () => {
    setDuration(videoRef.current && videoRef.current.duration);
  };

  useEffect(() => {
    if (!videoRef.current) {
      return undefined;
    }

    const handleVideoWaiting = () => {
      setIsWaiting(true);
    };

    const handleVideoCanPlayThrough = () => {
      setIsWaiting(false);
    };

    videoRef.current.addEventListener(`waiting`, handleVideoWaiting);
    videoRef.current.addEventListener(`canplaythrough`, handleVideoCanPlayThrough);

    return () => {
      videoRef.current.removeEventListener(`waiting`, handleVideoWaiting);
      videoRef.current.removeEventListener(`canplaythrough`, handleVideoCanPlayThrough);
    };
  }, [videoRef.current]);

  const handlePlayButtonClick = () => {
    if (!videoRef.current) {
      return;
    } else if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const createTimestampInterval = useCallback(() => {
    return setInterval(() => {
      setTimestamp(videoRef.current.currentTime);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = createTimestampInterval();
      return () => clearInterval(intervalRef.current);
    }
    return undefined;
  }, [isPlaying]);

  const displayTime = formatDuration(timestamp || duration);
  const progressPercent = timestamp / duration * 100;

  const handleTogglerMove = useCallback((event) => {
    const posXrelative = getTogglerRelativePos(event, progressBarRef);
    setTogglerTemporaryPos(posXrelative);
  }, []);

  const updateTimestamp = () => {
    const posXrelative = getTogglerRelativePos(event, progressBarRef);
    const newTimestamp = getTimestamp(duration, posXrelative);
    setTimestamp(newTimestamp);
    return newTimestamp;
  };

  const handleTogglerMouseDown = () => {
    setTogglerTemporaryPos(progressPercent);
    updateTimestamp();
    clearInterval(intervalRef.current);

    window.addEventListener(`mousemove`, handleTogglerMove);
    window.addEventListener(`mouseup`, handleTogglerMouseUp);
  };

  const handleTogglerMouseUp = () => {
    if (isPlaying) {
      intervalRef.current = createTimestampInterval();
    }
    setTogglerTemporaryPos(null);
    const newTimestamp = updateTimestamp();
    videoRef.current.currentTime = newTimestamp;

    window.removeEventListener(`mousemove`, handleTogglerMove);
    window.removeEventListener(`mouseup`, handleTogglerMouseUp);
  };

  return filmHasLoaded
    ? (
      <div className="player">
        <video
          ref={videoRef}
          src={film.videoLink}
          className="player__video"
          poster={film.previewImage}
          onLoadedMetadata={handleVideoLoadedMetaData}
        />

        <button
          type="button"
          className="player__exit"
          onClick={handleExitButtonClick}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time" ref={progressBarRef}>
              <progress className="player__progress" value={progressPercent.toString()} max="100"/>
              <div
                onMouseDown={handleTogglerMouseDown}
                className="player__toggler"
                style={{left: `${togglerTemporaryPos || progressPercent}%`}}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">{displayTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handlePlayButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                {isPlaying ? <use xlinkHref="#pause" /> : <use xlinkHref="#play-s" />}
              </svg>
              <span>{isPlaying ? `Pause` : `Play`}</span>
            </button>
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
        {isWaiting && <LoadingPlaceholder />}
      </div>
    ) : (
      <LoadingPlaceholder />
    );
};

MoviePlayer.propTypes = {};

export default MoviePlayer;
