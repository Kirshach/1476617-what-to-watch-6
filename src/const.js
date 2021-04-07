export const APIRoutes = {
  PROMO_FILM: `/films/promo`,
  FAVOURITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGOUT: `/logout`,
  FILMS: `/films`,
  LOGIN: `/login`,

  getFilmRoute(id) {
    return [this.FILMS, id].join(`/`);
  },

  getCommentsRoute(id) {
    return [this.COMMENTS, id].join(`/`);
  },

  getFilmStatusRoute(id, isFavourite) {
    const status = isFavourite ? `0` : `1`;
    return [this.FAVOURITE, id, status].join(`/`);
  }
};

export const FilmSubroutes = {
  overview: ``,
  details: `details`,
  reviews: `reviews`,
  addReview: `review`,
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

  getFilmRoute(id, subroute) {
    return (subroute ? [this.FILM_BASE_ROUTE, id, subroute] : [this.FILM_BASE_ROUTE, id]).join(`/`);
  },

  getAddReviewRoute(id) {
    return this.getFilmRoute(id, FilmSubroutes.addReview);
  },

  getFilmReviewsRoute(id) {
    return this.getFilmRoute(id, FilmSubroutes.reviews);
  },

  getFilmDetailsRoute(id) {
    return this.getFilmRoute(id, FilmSubroutes.details);
  },

  getFilmOverviewRoute(id) {
    return this.getFilmRoute(id, FilmSubroutes.overview);
  },

  gerMoviePlayerRoute(id) {
    return [this.MOVIE_PLAYER_BASE_ROUTE, id].join(`/`);
  },
};

export const ALL_GENRES = `All genres`;
