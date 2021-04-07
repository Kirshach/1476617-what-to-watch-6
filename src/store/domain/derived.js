import {createSelector} from 'reselect';

import {genreSelector} from '../app/state/selectors';
import {filmsSelector} from './selectors';
import {ALL_GENRES} from '../../const';

export const filmsByGenreSelector = createSelector(
    [filmsSelector, genreSelector],
    (films, selectedGenre) => films.filter(
        (film) =>
          selectedGenre === ALL_GENRES
            ? true
            : film.genre === selectedGenre
    )
);

export const genresSelector = createSelector(
    filmsSelector,
    (films) => [
      ALL_GENRES,
      ...[
        ...films.reduce((acc, film) => {
          acc.add(film.genre);
          return acc;
        }, new Set())
      ].sort().slice(0, 9)
    ]
);
