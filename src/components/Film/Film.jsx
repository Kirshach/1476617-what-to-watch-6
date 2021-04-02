import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import MovieCardList from '../MovieCardList/MovieCardList';
import TabBar from './TabBar';

import {filmsHaveLoadedSelector} from '../../store/app/state/selectors';
import {isAuthorizedSelector} from '../../store/app/auth/selectors';
import {postFavouriteFilmStatusThunk} from "../../store/domain/thunks";
import {filmsSelector} from '../../store/domain/selectors';
import {setFilmAction} from "../../store/domain/actions";

import {useNavigation} from '../../hooks';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

import {getFilmPageBody, getSimilarFilms, getPlayerRoute} from './_helpers';
import {useFilm} from '../../hooks/useFilm';
import {fetchFilmThunk} from '../../store/domain/thunks';

const Film = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const dispatch = useDispatch();
  const {redirect} = useNavigation();
  const {id, tab = ``} = useParams();

  const films = useSelector(filmsSelector);
  const filmsHaveLoaded = useSelector(filmsHaveLoadedSelector);
  const isAuthorized = useSelector(isAuthorizedSelector);
  const [film] = useFilm(id);

  useEffect(() => {
    if (!isInitialLoad || film.id !== id) {
      dispatch(fetchFilmThunk(id));
    }
  }, [id]);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  const similarFilms = getSimilarFilms(films, film);

  const handlePlayButtonClick = () => {
    redirect(getPlayerRoute(id));
  };

  const handleMyListButtonClick = async () => {
    const updatedFilm = await dispatch(postFavouriteFilmStatusThunk(film.id, film.isFavorite));
    dispatch(setFilmAction(updatedFilm));
  };

  if (!film || !film.id) {
    return null;
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage || ``} alt={film.name || ``} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader className="movie-card__head"/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name || ``}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre || ``}</span>
                <span className="movie-card__year">{film.released || ``}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={handleMyListButtonClick}
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref={film.isFavorite ? `#in-list` : `#add`} />
                  </svg>
                  <span>My list</span>
                </button>

                {isAuthorized &&
                    <Link to={film.id ? `/films/${film.id}/review` : null} className="btn movie-card__button">
                      Add review
                    </Link>}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage || ``} alt={`${film.name || ``} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <TabBar />

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
  );
};

Film.propTypes = {};

export default Film;
