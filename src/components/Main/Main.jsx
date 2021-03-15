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

import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";

const Main = ({
  selectedGenre,
  films,
  filmsShowingCount,
  filmsHaveLoaded,
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
        <PageHeader className="movie-card__head"/>
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
            {filmsHaveLoaded ? <MovieCardList films={filmsShowing} /> : <LoadingPlaceholder/>}
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
        <PageFooter />
      </div>
    </div>
  );
};

Main.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  films: filmArrayPropTypes.isRequired,
  filmsHaveLoaded: PropTypes.bool.isRequired,
  filmsShowingCount: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedGenre: state.app.genre,
  films: state.domain.films,
  filmsHaveLoaded: state.app.filmsHaveLoaded,
  filmsShowingCount: state.app.filmsShowingCount,
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms: () => dispatch(showMoreFilmsAction()),
});

const MainWithStore = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainWithStore;
