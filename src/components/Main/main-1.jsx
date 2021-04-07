import React, {useMemo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {filmsHaveLoadedSelector} from '../../store/app/state/selectors';
import {postFavouriteFilmStatusThunk} from '../../store/domain/thunks';
import {filmsByGenreSelector} from '../../store/domain/derived';
import {setPromoAction} from '../../store/domain/actions';
import {useNavigation, usePromo} from '../../hooks';
import {getPlayerRoute} from '../film/_helpers';

import {FILMS_BATCH} from './_const';

import LoadingPlaceholder from '../loading-placeholder/loading-placeholder';
import MovieCardList from '../movie-card-list/movie-card-list';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import GenreMenu from '../genre-menu/genre-menu';

const Main = () => {
  const dispatch = useDispatch();
  const {redirect} = useNavigation();

  const [filmsShowingCount, setFilmsShowingCount] = useState(FILMS_BATCH);

  const filmsHaveLoaded = useSelector(filmsHaveLoadedSelector);
  const filmsByGenre = useSelector(filmsByGenreSelector);
  const filmsShowing = useMemo(
      () => filmsByGenre.slice(0, filmsShowingCount),
      [filmsByGenre, filmsShowingCount]
  );

  const [promo, promoHasLoaded] = usePromo();

  const handleShowMoreButtonClick = () => setFilmsShowingCount((count) => count + FILMS_BATCH);

  const handlePlayButtonClick = () => {
    redirect(getPlayerRoute(promo.id));
  };

  const handleMyListButtonClick = async () => {
    const film = await dispatch(postFavouriteFilmStatusThunk(promo.id, promo.isFavorite));
    dispatch(setPromoAction(film));
  };

  return promoHasLoaded ? (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader className="movie-card__head" />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={promo.posterImage}
                alt={`${promo.name} poster`}
                width={218}
                height={327}
              />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
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
                  onClick={handleMyListButtonClick}
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref={promo.isFavorite ? `#in-list` : `#add`} />
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

          <GenreMenu onGenreChange={() => setFilmsShowingCount(FILMS_BATCH)}/>

          <div className="catalog__movies-list">
            {filmsHaveLoaded ? <MovieCardList films={filmsShowing} /> : <LoadingPlaceholder/>}
          </div>

          <div className="catalog__more">
            {
              filmsShowingCount < filmsByGenre.length &&
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
