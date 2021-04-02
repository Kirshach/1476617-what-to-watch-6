import {
  DomainNS,
  domainReducer,
  initialState,
} from './reducer';

import {ActionType} from './actions';

const macbeth = {
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

const beach = {
  name: `Beach`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
  backgroundColor: `#EBC996`,
  description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
  rating: 3.3,
  scoresCount: 207824,
  director: `Danny Boyle`,
  starring: [
    `Leonardo DiCaprio`,
    `Daniel York`,
    `Patcharawan Patarakijjanon`
  ],
  runTime: 119,
  genre: `Adventure`,
  released: 2000,
  id: 2,
  isFavorite: true,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const orlando = {
  name: `Orlando`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Orlando.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/orlando.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Orlando.jpg`,
  backgroundColor: `#D8D3BD`,
  description: `Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.`,
  rating: 2.6,
  scoresCount: 12292,
  director: `Sally Potter`,
  starring: [
    `Tilda Swinton`,
    `Billy Zane`,
    `Quentin Crisp`
  ],
  runTime: 94,
  genre: `Drama`,
  released: 1992,
  id: 7,
  isFavorite: true,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const matrix = {
  name: `Matrix`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/matrix.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/matrix.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/matrix.jpg`,
  backgroundColor: `#B9B27E`,
  description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
  rating: 4.4,
  scoresCount: 1503092,
  director: `Wachowski Brothers`,
  starring: [
    `Keanu Reeves`,
    `Laurence Fishburne`,
    `Carrie-Anne Moss`
  ],
  runTime: 136,
  genre: `Action`,
  released: 1999,
  id: 6,
  isFavorite: false,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const favouriteFilms = [
  macbeth,
  beach,
  orlando
];

const films = [
  macbeth,
  beach,
  matrix,
  orlando,
];

const zakReview = {
  id: 1,
  user: {
    id: 13,
    name: `Zak`
  },
  rating: 1.4,
  comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
  date: `2021-03-07T08:04:28.658Z`
};

const emelyReview = {
  id: 2,
  user: {
    id: 17,
    name: `Emely`
  },
  rating: 7.2,
  comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
  date: `2021-02-22T08:04:28.658Z`
};

const reviews = {
  id: 2,
  data: [
    zakReview,
    emelyReview,
  ]
};

describe(`"domain" reducer`, () => {
  test(`returns initial state after being called with no first argument`, () => {
    expect(domainReducer(undefined, {})).toEqual(initialState);
  });
  test(`returns initialState after an unexpected action`, () => {
    const unexpectedAction = {
      type: `someRandomActionTypeWhichClearlyDoesNotExist`,
      payload: `Whatever payload, shouldn't make sense anyways`,
    };
    expect(domainReducer(initialState, unexpectedAction)).toEqual(initialState);
  });

  test(`handles ${ActionType.SET_FAVOURITE_FILMS} action correctly`, () => {
    const initialStateWithFavouriteFilms = {
      ...initialState,
      [DomainNS.FAVOURITE_FILMS]: favouriteFilms,
    };
    const setFavouriteFilmsAction = {
      type: ActionType.SET_FAVOURITE_FILMS,
      payload: favouriteFilms,
    };
    expect(domainReducer(initialState, setFavouriteFilmsAction)).toEqual(initialStateWithFavouriteFilms);
  });

  test(`handles ${ActionType.SET_FILM} action correctly`, () => {
    const initialStateWithMacbethFilm = {
      ...initialState,
      [DomainNS.FILM]: macbeth,
    };
    const setMacbethFilmAction = {
      type: ActionType.SET_FILM,
      payload: macbeth,
    };
    expect(domainReducer(initialState, setMacbethFilmAction)).toEqual(initialStateWithMacbethFilm);
  });

  test(`handles ${ActionType.SET_FILMS} action correctly`, () => {
    const initialStateWithFilms = {
      ...initialState,
      [DomainNS.FILMS]: films,
    };
    const setFilmsAction = {
      type: ActionType.SET_FILMS,
      payload: films,
    };
    expect(domainReducer(initialState, setFilmsAction)).toEqual(initialStateWithFilms);
  });

  test(`handles ${ActionType.SET_PROMO} action correctly`, () => {
    const initialStateWithMatrixPromo = {
      ...initialState,
      [DomainNS.PROMO]: matrix,
    };
    const setMatrixPromoAction = {
      type: ActionType.SET_PROMO,
      payload: matrix,
    };
    expect(domainReducer(initialState, setMatrixPromoAction)).toEqual(initialStateWithMatrixPromo);
  });

  test(`handles ${ActionType.SET_REVIEWS} action correctly`, () => {
    const initialStateWithReviews = {
      ...initialState,
      [DomainNS.REVIEWS]: reviews,
    };
    const setReviewsAction = {
      type: ActionType.SET_REVIEWS,
      payload: reviews,
    };
    expect(domainReducer(initialState, setReviewsAction)).toEqual(initialStateWithReviews);
  });
});
