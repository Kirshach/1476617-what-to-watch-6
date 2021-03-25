import React from 'react';

import Description from './Description';
import ReviewsList from './ReviewsList';
import Details from './Details';

import {AppRoutes} from '../../const';
import {Subroutes} from './_const';

export const getFilmPageBody = (film, tab) => {
  switch (tab) {
    case Subroutes.overview:
      return <Description film={film}/>;
    case Subroutes.details:
      return <Details film={film}/>;
    case Subroutes.reviews:
      return <ReviewsList id={film.id}/>;
    default: throw new Error(`Invalid route provided to getFilmPageBody function`);
  }
};
export const getSimilarFilms = (films, film) => {
  return films && films.filter(
      (anotherFilm) => anotherFilm.genre === film.genre && anotherFilm.id !== film.id
  ) || [];
};
export const formatDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};
export const getPlayerRoute = (id) => `${AppRoutes.MOVIE_PLAYER_BASE_ROUTE}/${id}`;
export const getTabClassName = (isCurrentRoute) => `movie-nav__item ${isCurrentRoute ? `movie-nav__item--active` : ``}`;
