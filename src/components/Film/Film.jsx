import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import Description from './Description';
import Details from './Details';
import MovieCardList from '../MovieCardList/MovieCardList';
import ReviewsList from './ReviewsList';
import TabBar from './TabBar';

import {filmArrayPropTypes} from '../../prop-types/film';
import {fetchFilmThunk} from '../../store/domain/thunks';

import {useNavigation} from '../../hooks';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

import {FilmAppSubroutes} from '../../const';

const TABS = [
  {label: `Overview`, route: FilmAppSubroutes.overview},
  {label: `Details`, route: FilmAppSubroutes.details},
  {label: `Reviews`, route: FilmAppSubroutes.reviews},
];

const getFilmPageBody = (film, tab) => {
  switch (tab) {
    case FilmAppSubroutes.overview:
      return <Description film={film}/>;
    case FilmAppSubroutes.details:
      return <Details film={film}/>;
    case FilmAppSubroutes.reviews:
      return <ReviewsList id={film.id}/>;
    default: throw new Error(`Invalid route provided to getFilmPageBody function`);
  }
};

const getSimilarFilms = (films, film) => {
  return films && films.filter(
      (anotherFilm) => anotherFilm.genre === film.genre && anotherFilm.id !== film.id
  ) || [];
};

const Film = ({
  dispatchFetchFilmThunk,
  film,
  films,
  filmHasLoaded,
  filmsHaveLoaded,
  isAuthorized,
}) => {
  const {redirect} = useNavigation();
  const {id, tab = ``} = useParams();
  const similarFilms = getSimilarFilms(films, film);

  useEffect(() => {
    dispatchFetchFilmThunk(id);
  }, [id]);

  return filmHasLoaded
    ? (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader className="movie-card__head"/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={() => redirect(`/player/${film.id}`)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>

                  {isAuthorized &&
                    <Link to={`/films/${film.id}/review`} className="btn movie-card__button">
                      Add review
                    </Link>}

                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <div className="movie-card__desc">

                <TabBar tabs={TABS}/>

                {getFilmPageBody(film, tab)}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">

          <section className="catalog catalog--like-this">
            {similarFilms.length > 0 &&
              <>
                <h2 className="catalog__title">More like this</h2>
                <div className="catalog__movies-list">
                  {filmsHaveLoaded
                    ? <MovieCardList films={similarFilms} />
                    : <LoadingPlaceholder />}
                </div>
              </>}
          </section>

          <PageFooter />
        </div>
      </>
    ) : (
      <LoadingPlaceholder />
    );
};

Film.propTypes = {
  dispatchFetchFilmThunk: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  films: filmArrayPropTypes,
  filmHasLoaded: PropTypes.bool.isRequired,
  filmsHaveLoaded: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.domain.film,
  films: state.domain.films,
  filmHasLoaded: state.app.filmHasLoaded,
  filmsHaveLoaded: state.app.filmsHaveLoaded,
  isAuthorized: state.app.isAuthorized,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchFilmThunk: (id) => dispatch(fetchFilmThunk(id)),
});


const FilmWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(Film);

export default FilmWithStore;
