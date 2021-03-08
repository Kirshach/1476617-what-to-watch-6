import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {showMoreFilmsAction} from '../../store/app/actions';

import GenreMenu from '../GenreMenu/GenreMenu';
import MovieCardList from '../MovieCardList/MovieCardList';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';

import {Genres} from '../../const';
import {useNavigation} from '../../hooks/useNavigation';

import {filmArrayPropTypes} from '../../prop-types/film';

const Main = ({
  selectedGenre,
  films,
  filmsShowingCount,
  isLoadingFilms,
  showMoreFilms
}) => {
  const {redirect} = useNavigation();

  // TODO: Пофиксить когда появится запрос на промо
  if (films.length === 0) {
    return null;
  }

  const {id, name, genre, released, posterImage, backgroundImage} = films[0];

  const filmsByGenre = films
    .filter((film) => selectedGenre === Genres.allGenres ? true : film.genre === selectedGenre);
  const filmsShowing = filmsByGenre.slice(0, filmsShowingCount);
  const handleShowMoreButtonClick = () => showMoreFilms();
  const isShowingShowMoreButton = filmsShowingCount < filmsByGenre.length;

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={posterImage}
                alt={`${name} poster`}
                width={218}
                height={327}
              />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={() => redirect(`/player/${id}`)}
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreMenu />

          <div className="catalog__movies-list">
            {isLoadingFilms ? <LoadingPlaceholder/> : <MovieCardList films={filmsShowing} />}
          </div>

          <div className="catalog__more">
            {
              isShowingShowMoreButton &&
              <button
                className="catalog__button"
                type="button"
                onClick={handleShowMoreButtonClick}
              >
                Show more
              </button>
            }
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

Main.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  films: filmArrayPropTypes.isRequired,
  filmsShowingCount: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
  isLoadingFilms: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  selectedGenre: state.app.genre,
  films: state.domain.films,
  filmsShowingCount: state.app.filmsShowingCount,
  isLoadingFilms: state.app.isLoadingFilms,
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms: () => dispatch(showMoreFilmsAction()),
});

const MainWithStore = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainWithStore;
