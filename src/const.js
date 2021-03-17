export const Genres = {
  allGenres: `All genres`,
  comedies: `Comedies`,
  crime: `Crime`,
  documentary: `Documentary`,
  dramas: `Dramas`,
  horror: `Horror`,
  kidsAndFamily: `Kids & Family`,
  romance: `Romance`,
  sciFi: `Sci-Fi`,
  thriller: `Thrillers`,
};

export const APIRoutes = {
  FILMS: `/films`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
};

export const AppRoutes = {
  ADD_REVIEW: `/films/:id/review`,
  FILM: `/films/:id/:tab?`,
  LOGIN: `/login`,
  MAIN: `/`,
  MOVIE_PLAYER: `/player/:id`,
  MY_LIST: `/mylist`,
  PAGE_NOT_FOUND: `/404`,
};

export const FilmAppSubroutes = {
  overview: ``,
  details: `details`,
  reviews: `reviews`
};
