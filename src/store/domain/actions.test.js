import {
  ActionType,
  setFavouriteFilmsAction as setFavouriteFilmsActionCreator,
  setFilmAction as setFilmActionCreator,
  setFilmsAction as setFilmsActionCreator,
  setPromoAction as setPromoActionCreator,
  setReviewsAction as setReviewsActionCreator,
} from './actions';

export const macbeth = {
  name: `Macbeth`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  backgroundColor: `#F1E9CE`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  rating: 3.3,
  scoresCount: 48798,
  director: `Justin Kurzel`,
  starring: [
    `Michael Fassbender`,
    `Marion Cotillard`,
    `Jack Madigan`
  ],
  runTime: 113,
  genre: `Drama`,
  released: 2015,
  id: 1,
  isFavorite: true,
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

export const films = [
  {
    name: `Bronson`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    rating: 3.6,
    scoresCount: 109661,
    director: `Nicolas Winding Refn`,
    starring: [
      `Tom Hardy`,
      `Kelly Adams`,
      `Luing Andrews`
    ],
    runTime: 92,
    genre: `Action`,
    released: 2008,
    id: 9,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    name: `The Revenant`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Revenant.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/revenant.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Revenant.jpg`,
    backgroundColor: `#92918B`,
    description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    rating: 4,
    scoresCount: 618498,
    director: `Alejandro G. Iñárritu`,
    starring: [
      `Leonardo DiCaprio`,
      `Tom Hardy`,
      `Will Poulter`
    ],
    runTime: 156,
    genre: `Action`,
    released: 2015,
    id: 8,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  macbeth,
];

const reviewsData = [
  {
    id: 1,
    user: {
      id: 13,
      name: `Zak`
    },
    rating: 1.4,
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-03-07T08:04:28.658Z`
  },
  {
    id: 2,
    user: {
      id: 17,
      name: `Emely`
    },
    rating: 7.2,
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-02-22T08:04:28.658Z`
  },
];

export const reviews = {
  id: 1,
  data: reviewsData,
};

describe(`"domain" action creators return correct action objects:`, () => {
  test(`setFavouriteFilmsAction`, () => {
    const setFavouriteFilmsActionWithFilms = {
      type: ActionType.SET_FAVOURITE_FILMS,
      payload: films,
    };
    expect(setFavouriteFilmsActionCreator(films)).toEqual(setFavouriteFilmsActionWithFilms);
  });

  test(`setFilmAction`, () => {
    const film = macbeth;
    const setFilmActionWithMacbeth = {
      type: ActionType.SET_FILM,
      payload: film,
    };
    expect(setFilmActionCreator(film)).toEqual(setFilmActionWithMacbeth);
  });

  test(`setFilmsAction`, () => {
    const setFilmsActionWithFilms = {
      type: ActionType.SET_FILMS,
      payload: films,
    };
    expect(setFilmsActionCreator(films)).toEqual(setFilmsActionWithFilms);
  });

  test(`setPromoAction`, () => {
    const film = macbeth;
    const setPromoActionWithBronson = {
      type: ActionType.SET_PROMO,
      payload: film,
    };
    expect(setPromoActionCreator(film)).toEqual(setPromoActionWithBronson);
  });

  test(`setReviewsAction`, () => {
    const setReviewsActionWithReviews = {
      type: ActionType.SET_REVIEWS,
      payload: reviews,
    };
    expect(setReviewsActionCreator(reviews)).toEqual(setReviewsActionWithReviews);
  });
});
