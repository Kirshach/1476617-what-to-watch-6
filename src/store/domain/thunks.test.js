import MockAdapter from 'axios-mock-adapter';

import {ActionType as StateActionType} from '../app/state/actions';
import {HANDLE_API_ERROR, REDIRECT} from '../middlewares';
import {api, createAPI} from '../../api/api';
import {ActionType} from './actions';
import {DOMAIN} from '../rootReducer';
import {AppRoutes} from '../../const';

import {
  macbeth,
  films,
  reviews,
} from './actions.test';

import {
  fetchFavouriteFilmsThunk,
  fetchFilmThunk,
  fetchFilmsThunk,
  fetchPromoThunk,
  fetchReviewsThunk,
  postFavouriteFilmStatusThunk,
  postReviewThunk,
} from './thunks';
import {APIRoutes} from '../../const';
import {DomainNS} from './reducer';

const filmReceived = macbeth;
const filmToBeUpdated = films[films.length - 1];
const filmWithUpdatedStatus = {...filmToBeUpdated, isFavorite: true};
const filmsWithUpdatedFilmStatus = [...(films.slice(0, 2)), filmWithUpdatedStatus];

const filmId = 1;
const reviewFilmId = 1;

const filmRoute = APIRoutes.getFilmRoute(filmId);
const reviewRoute = APIRoutes.getCommentsRoute(reviewFilmId);

const mockAPI = new MockAdapter(api);
mockAPI
  .onGet(APIRoutes.FAVOURITE)
  .reply(200, films)
  .onGet(filmRoute)
  .reply(200, filmReceived)
  .onGet(APIRoutes.FILMS)
  .reply(200, films)
  .onGet(APIRoutes.PROMO_FILM)
  .reply(200, filmReceived)
  .onGet(reviewRoute)
  .reply(200, reviews)
  .onPost(reviewRoute)
  .reply(200)
  .onPost(APIRoutes.getFilmStatusRoute(filmToBeUpdated.id, false))
  .reply(200, filmWithUpdatedStatus);

const setFavouriteFilmsHaveLoadedFalse = {
  type: StateActionType.SET_FAVOURITE_FILMS_HAVE_LOADED,
  payload: false,
};

const setFavouriteFilmsHaveLoadedTrue = {
  type: StateActionType.SET_FAVOURITE_FILMS_HAVE_LOADED,
  payload: true,
};

const setFilmsHaveLoadedFalse = {
  type: StateActionType.SET_FILMS_HAVE_LOADED,
  payload: false,
};

const setFilmsHaveLoadedTrue = {
  type: StateActionType.SET_FILMS_HAVE_LOADED,
  payload: true,
};

const setFilmHasLoadedFalse = {
  type: StateActionType.SET_FILM_HAS_LOADED,
  payload: false,
};

const setFilmHasLoadedTrue = {
  type: StateActionType.SET_FILM_HAS_LOADED,
  payload: true,
};

const setPromoHasLoadedTrue = {
  type: StateActionType.SET_PROMO_HAS_LOADED,
  payload: true,
};

const setPromoHasLoadedFalse = {
  type: StateActionType.SET_PROMO_HAS_LOADED,
  payload: false,
};

const setReviewsHaveLoadedTrue = {
  type: StateActionType.SET_REVIEWS_HAVE_LOADED,
  payload: true,
};

const setReviewsHaveLoadedFalse = {
  type: StateActionType.SET_REVIEWS_HAVE_LOADED,
  payload: false,
};

const setFavouriteFilmsAction = {
  type: ActionType.SET_FAVOURITE_FILMS,
  payload: films,
};

const setFilmAction = {
  type: ActionType.SET_FILM,
  payload: filmReceived,
};

const setFilmsAction = {
  type: ActionType.SET_FILMS,
  payload: films,
};

const setFilmsWithIUpdatedFilmAction = {
  type: ActionType.SET_FILMS,
  payload: filmsWithUpdatedFilmStatus,
};

const setPromoAction = {
  type: ActionType.SET_PROMO,
  payload: filmReceived,
};

const setReviewsAction = {
  type: ActionType.SET_REVIEWS,
  payload: {
    id: reviewFilmId,
    data: reviews,
  },
};

const redirectToReviewsAction = {
  type: REDIRECT,
  payload: AppRoutes.getFilmReviewsRoute(reviewFilmId),
};

describe(`"domain" thunks work correctly`, () => {
  test(`fetchFavouriteFilmsThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const fetchFavouriteFilms = fetchFavouriteFilmsThunk();
    await fetchFavouriteFilms(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setFavouriteFilmsHaveLoadedFalse);
    expect(dispatch).toHaveBeenNthCalledWith(2, setFavouriteFilmsAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setFavouriteFilmsHaveLoadedTrue);
  });

  test(`fetchFavouriteFilmsThunk dispatches an API error action on an invalid API request`, async () => {
    const localFavouriteApi = createAPI();
    const failingLocalApiMock = new MockAdapter(localFavouriteApi);

    failingLocalApiMock
      .onGet(APIRoutes.FAVOURITE)
      .reply(401);
    const dispatch = jest.fn();
    const fetchFavouriteFilms = fetchFavouriteFilmsThunk();

    try {
      await fetchFavouriteFilms(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, setFavouriteFilmsHaveLoadedFalse);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
      expect(dispatch).toHaveBeenNthCalledWith(3, setFavouriteFilmsHaveLoadedTrue);
    }
  });

  test(`fetchFilmThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const fetchFilm = fetchFilmThunk(filmId);
    await fetchFilm(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setFilmHasLoadedFalse);
    expect(dispatch).toHaveBeenNthCalledWith(2, setFilmAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setFilmHasLoadedTrue);
  });

  test(`fetchFilmThunk dispatches an API error action on an invalid API request`, async () => {
    const dispatch = jest.fn();
    const fetchFilm = fetchFilmThunk(filmId + 1);
    await fetchFilm(dispatch, () => { }, api);

    try {
      await fetchFilm(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, setFilmHasLoadedFalse);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
      expect(dispatch).toHaveBeenNthCalledWith(3, setFilmHasLoadedTrue);
    }
  });

  test(`fetchFilmsThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const fetchFilms = fetchFilmsThunk();
    await fetchFilms(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setFilmsHaveLoadedFalse);
    expect(dispatch).toHaveBeenNthCalledWith(2, setFilmsAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setFilmsHaveLoadedTrue);
  });

  test(`fetchFilmsThunk dispatches an API error action on an invalid API request`, async () => {
    const localFilmsApi = createAPI();
    const failingLocalApiMock = new MockAdapter(localFilmsApi);

    failingLocalApiMock
      .onGet(APIRoutes.FILMS)
      .reply(401);
    const dispatch = jest.fn();
    const fetchFilms = fetchFilmsThunk();

    try {
      await fetchFilms(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, setFilmsHaveLoadedFalse);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
      expect(dispatch).toHaveBeenNthCalledWith(3, setFilmsHaveLoadedTrue);
    }
  });

  test(`fetchPromoThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const fetchPromo = fetchPromoThunk();
    await fetchPromo(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setPromoHasLoadedFalse);
    expect(dispatch).toHaveBeenNthCalledWith(2, setPromoAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setPromoHasLoadedTrue);
  });

  test(`fetchPromoThunk dispatches an API error action on an invalid API request`, async () => {
    const localPromoApi = createAPI();
    const failingLocalApiMock = new MockAdapter(localPromoApi);
    failingLocalApiMock
    .onGet(APIRoutes.PROMO_FILM)
    .reply(401);

    const dispatch = jest.fn();
    const fetchPromo = fetchPromoThunk();

    try {
      await fetchPromo(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, setPromoHasLoadedFalse);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
      expect(dispatch).toHaveBeenNthCalledWith(3, setPromoHasLoadedTrue);
    }
  });

  test(`fetchReviewsThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const fetchReviews = fetchReviewsThunk(reviewFilmId);
    await fetchReviews(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setReviewsHaveLoadedFalse);
    expect(dispatch).toHaveBeenNthCalledWith(2, setReviewsAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setReviewsHaveLoadedTrue);
  });

  test(`fetchReviewsThunk dispatches an API error action on an invalid API request`, async () => {
    const dispatch = jest.fn();
    const fetchReviews = fetchReviewsThunk(reviewFilmId + 1);

    try {
      await fetchReviews(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, setReviewsHaveLoadedFalse);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
      expect(dispatch).toHaveBeenNthCalledWith(3, setReviewsHaveLoadedTrue);
    }
  });

  test(`postFavouriteFilmStatusThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const postFavouriteFilmStatus = postFavouriteFilmStatusThunk(filmToBeUpdated.id, false);
    const getState = () => ({
      [DOMAIN]: {
        [DomainNS.FILMS]: films
      }
    });
    await postFavouriteFilmStatus(dispatch, getState, api);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, setFilmsWithIUpdatedFilmAction);
    expect(dispatch).toHaveBeenNthCalledWith(2, expect.any(Function));
  });

  test(`postFavouriteFilmStatusThunk dispatches an API error action on an invalid API request`, async () => {
    const localFavouriteFilmStatusApi = createAPI();
    const failingLocalApiMock = new MockAdapter(localFavouriteFilmStatusApi);
    failingLocalApiMock
      .onPost(APIRoutes.getFilmStatusRoute(filmToBeUpdated.id, false))
      .reply(401);

    const dispatch = jest.fn();
    const postFavouriteFilmStatus = postFavouriteFilmStatusThunk(filmToBeUpdated.id + 1);

    try {
      await postFavouriteFilmStatus(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
    }
  });

  test(`postReviewThunk invokes dispatch correctly on a valid API request`, async () => {
    const reviewReqBody = {
      rating: 1,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    };
    const dispatch = jest.fn();
    const postReview = postReviewThunk(reviewFilmId, reviewReqBody);
    await postReview(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, expect.any(Function));
    expect(dispatch).toHaveBeenNthCalledWith(2, redirectToReviewsAction);
  });

  test(`postReviewThunk dispatches an API error action on an invalid API request`, async () => {
    const local400ErrorPostReviewApi = createAPI();
    const failingWith400LocalApiMock = new MockAdapter(local400ErrorPostReviewApi);
    failingWith400LocalApiMock
      .onPost(APIRoutes.getFilmStatusRoute(reviewFilmId, false))
      .reply(400);

    const local401ErrorPostReviewApi = createAPI();
    const failingWith401LocalApiMock = new MockAdapter(local401ErrorPostReviewApi);
    failingWith401LocalApiMock
      .onPost(APIRoutes.getFilmStatusRoute(reviewFilmId, false))
      .reply(401);

    const dispatch = jest.fn();
    const postFavouriteFilmStatus = postFavouriteFilmStatusThunk(filmToBeUpdated.id + 1 + Math.random());

    try {
      await postFavouriteFilmStatus(dispatch, () => { }, api);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(2, handleAPIErrorAction);
    }
  });
});
