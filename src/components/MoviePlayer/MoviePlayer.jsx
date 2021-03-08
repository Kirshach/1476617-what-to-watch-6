import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {filmArrayPropTypes} from '../../prop-types/film';
import {useQueryFilmById} from '../../hooks/useQueryFilmById';
import {useNavigation} from '../../hooks/useNavigation';

import {withFilms} from '../../hocs/withFilms';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';

const MoviePlayer = ({films, isLoadingFilms}) => {
  const film = useQueryFilmById(films);
  const {goBack} = useNavigation();

  if (!isLoadingFilms && !film) {
    return <Redirect to="/404" />;
  }

  return isLoadingFilms
    ? <LoadingPlaceholder />
    : (
      <div className="player">
        <video src={film.videoLink} className="player__video" poster={film.previewImage}></video>

        <button
          type="button"
          className="player__exit"
          onClick={() => goBack()}
        >
        Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
};

MoviePlayer.propTypes = {
  films: filmArrayPropTypes,
  isLoadingFilms: PropTypes.bool.isRequired,
};

const MoviePlayerWithFilms = withFilms(MoviePlayer);

export default MoviePlayerWithFilms;
