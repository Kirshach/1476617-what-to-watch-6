import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import {genreSelector, filmsShowingCountSelector, filmsHaveLoadedSelector} from "../../store/app/state/selectors";
import {filmsSelector} from '../../store/domain/selectors';
import {showMoreFilmsAction} from '../../store/app/state/actions';
import {useNavigation, usePromo} from '../../hooks';
import {getPlayerRoute} from "../Film/_helpers";
import {Genres} from '../../const';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import MovieCardList from '../MovieCardList/MovieCardList';
import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import GenreMenu from '../GenreMenu/GenreMenu';

const Main = () => {
  const dispatch = useDispatch();
  const {redirect} = useNavigation();

  const films = useSelector(filmsSelector);
  const selectedGenre = useSelector(genreSelector);
  const filmsShowingCount = useSelector(filmsShowingCountSelector);
  const filmsHaveLoaded = useSelector(filmsHaveLoadedSelector);
  const {
    promo: {id, name, genre, released, posterImage, backgroundImage},
    promoHasLoaded,
  } = usePromo();

  const filmsByGenre = films
    .filter((film) => selectedGenre === Genres.allGenres ? true : film.genre === selectedGenre);
  const filmsShowing = filmsByGenre.slice(0, filmsShowingCount);
  const handleShowMoreButtonClick = () => dispatch(showMoreFilmsAction());
  const isShowingShowMoreButton = filmsShowingCount < filmsByGenre.length;

  const handlePlayButtonClick = () => {
    redirect(getPlayerRoute(id));
  };

  return promoHasLoaded ? (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className="movie-card__head" />

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
                  onClick={handlePlayButtonClick}
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
  ) : (
    <LoadingPlaceholder/>
  );
};

Main.propTypes = {};

export default Main;
