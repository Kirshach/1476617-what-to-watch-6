import React from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';

import Description from './Description';
import Details from './Details';
import MovieCardList from '../MovieCardList/MovieCardList';
import Reviews from './Reviews';
import TabBar from './TabBar';

import {useQueryFilmById} from '../../hooks/useQueryFilmById';
import {useNavigation} from '../../hooks/useNavigation';

import {filmArrayPropTypes} from '../../prop-types/film';

export const Routes = {
  overview: ``,
  details: `details`,
  reviews: `reviews`
};

const TABS = [
  {label: `Overview`, route: Routes.overview},
  {label: `Details`, route: Routes.details},
  {label: `Reviews`, route: Routes.reviews},
];

const getFilmPageBody = (film, tab) => {
  switch (tab) {
    case Routes.overview:
      return <Description film={film}/>;
    case Routes.details:
      return <Details film={film}/>;
    case Routes.reviews:
      return <Reviews/>;
    default: throw new Error(`Invalid route provided to getFilmPageBody function`);
  }
};

const getSimilarFilms = (films, film) => {
  return films.filter((anotherFilm) => anotherFilm.genre === film.genre && anotherFilm !== film);
};

const Film = ({films}) => {
  const {tab = ``} = useParams();
  const film = useQueryFilmById(films);
  const {redirect} = useNavigation();

  if (!film) {
    return <Redirect to="/404" />;
  }

  const {
    id,
    backgroundImage,
    genre,
    name,
    posterImage,
    released,
  } = film;

  const similarFilms = getSimilarFilms(films, film);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => redirect(`/player/${id}`)}>
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
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
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
          {
            similarFilms.length > 0
            &&
            <>
              <h2 className="catalog__title">More like this</h2>
              <div className="catalog__movies-list">
                <MovieCardList films={similarFilms} />
              </div>
            </>
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Film.propTypes = {
  films: filmArrayPropTypes
};

export default Film;
