import React from 'react';

import MovieCardList from '../movie-card-list/movie-card-list';
import LoadingPlaceholder from '../loading-placeholder/loading-placeholder';

export const getFavouriteMoviesListComponent = (
    favouriteFilms,
    favouriteFilmsHaveLoaded,
) => {
  if (favouriteFilmsHaveLoaded) {
    return favouriteFilms.length > 0
      ? <MovieCardList films={favouriteFilms} />
      : (
        <div className="no-films-placeholder">
          There seems to be no sign of life in your favourite movies list
        </div>
      );
  } else {
    return <LoadingPlaceholder />;
  }
};
