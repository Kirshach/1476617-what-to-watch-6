import {createSelector} from 'reselect';

import {genreSelector} from '../app/state/selectors';
import {filmsSelector} from './selectors';
import {AllGenres} from '../../const';

export const filmsByGenreSelector = createSelector(
    [filmsSelector, genreSelector],
    (films, selectedGenre) => films.filter(
        (film) =>
          selectedGenre === AllGenres
            ? true
            : film.genre === selectedGenre
    )
);

export const genresSelector = createSelector(
    filmsSelector,
    (films) => [
      AllGenres,
      ...[
        ...films.reduce((acc, film) => {
          acc.add(film.genre);
          return acc;
        }, new Set())
      ].sort().slice(0, 9)
    ]
);
