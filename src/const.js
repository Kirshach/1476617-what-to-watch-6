export const APIRoutes = {
  PROMO_FILM: `/films/promo`,
  FAVOURITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGOUT: `/logout`,
  FILMS: `/films`,
  LOGIN: `/login`,

  getFilmRoute: (id, tab) => tab ? [APIRoutes.FILMS, id, tab].join(`/`) : [APIRoutes.FILMS, id].join(`/`),
  getCommentsRoute: (id) => [APIRoutes.COMMENTS, id].join(`/`),
  getFavouriteFilmStatusRoute: (id, isFavourite) => {
    const status = isFavourite ? `0` : `1`;
    return [APIRoutes.FAVOURITE, id, status].join(`/`);
  }
};

export const FilmSubroutes = {
  overview: ``,
  details: `details`,
  reviews: `reviews`
};

export const AppRoutes = {
  MOVIE_PLAYER_BASE_ROUTE: `/player`,
  ADD_REVIEW: `/films/:id/review`,
  MOVIE_PLAYER: `/player/:id`,
  FILM_BASE_ROUTE: `/films`,
  FILM: `/films/:id/:tab?`,
  PAGE_NOT_FOUND: `/404`,
  MY_LIST: `/mylist`,
  LOGOUT: `/logout`,
  LOGIN: `/login`,
  MAIN: `/`,

  getFilmReviewsRoute(id) {
    return [this.FILM_BASE_ROUTE, id, FilmSubroutes.reviews].join(`/`);
  }
};

export const AllGenres = `All genres`;
