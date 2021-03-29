import React from 'react';

import MovieCardList from '../MovieCardList/MovieCardList';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';

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
