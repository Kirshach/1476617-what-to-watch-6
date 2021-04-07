import {
  StateNS,
  INITIAL_STATE,
  stateReducer,
} from './reducer';

import {ALL_GENRES} from '../../../const';
import {ActionType} from './actions';

const mockAppState = {
  [StateNS.FAVOURITE_FILMS_HAVE_LOADED]: false,
  [StateNS.REVIEWS_HAVE_LOADED]: false,
  [StateNS.FILMS_HAVE_LOADED]: true,
  [StateNS.PROMO_HAS_LOADED]: true,
  [StateNS.FILM_HAS_LOADED]: false,
  [StateNS.IS_ONLINE]: true,
  [StateNS.GENRE]: ALL_GENRES,
};

describe(`"state" reducer`, () => {
  test(`returns initial state after being called with no first argument`, () => {
    expect(stateReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  test(`returns INITIAL_STATE after an unexpected action`, () => {
    const unexpectedAction = {
      type: `someRandomActionTypeWhichClearlyDoesNotExist`,
      payload: `Whatever payload, shouldn't make sense anyways`,
    };
    expect(stateReducer(INITIAL_STATE, unexpectedAction)).toEqual(INITIAL_STATE);
  });

  test(`handles ${ActionType.SET_FAVOURITE_FILMS_HAVE_LOADED} action correctly`, () => {
    const mockAppStateWithFavouriteFilmsHaveLoadedTrue = {
      ...mockAppState,
      [StateNS.FAVOURITE_FILMS_HAVE_LOADED]: true,
    };
    const setFavouriteFilmsHaveLoadedTrueAction = {
      type: ActionType.SET_FAVOURITE_FILMS_HAVE_LOADED,
      payload: true,
    };
    const setFavouriteFilmsHaveLoadedFalseAction = {
      type: ActionType.SET_FAVOURITE_FILMS_HAVE_LOADED,
      payload: false,
    };
    const updatedState = stateReducer(mockAppState, setFavouriteFilmsHaveLoadedTrueAction);
    expect(updatedState).toEqual(mockAppStateWithFavouriteFilmsHaveLoadedTrue);
    expect(stateReducer(updatedState, setFavouriteFilmsHaveLoadedFalseAction)).toEqual(mockAppState);
  });

  test(`handles ${ActionType.SET_FILMS_HAVE_LOADED} action correctly`, () => {
    const mockAppStateWithFilmsHaveLoadedFalse = {
      ...mockAppState,
      [StateNS.FILMS_HAVE_LOADED]: false,
    };
    const setFilmsHaveLoadedFalseAction = {
      type: ActionType.SET_FILMS_HAVE_LOADED,
      payload: false,
    };
    const setFilmsHaveLoadedTrueAction = {
      type: ActionType.SET_FILMS_HAVE_LOADED,
      payload: true,
    };
    const updatedState = stateReducer(mockAppState, setFilmsHaveLoadedFalseAction);
    expect(updatedState).toEqual(mockAppStateWithFilmsHaveLoadedFalse);
    expect(stateReducer(updatedState, setFilmsHaveLoadedTrueAction)).toEqual(mockAppState);
  });

  test(`handles ${ActionType.SET_FILM_HAS_LOADED} action correctly`, () => {
    const mockAppStateWithFilmHasLoadedFalse = {
      ...mockAppState,
      [StateNS.FILM_HAS_LOADED]: true,
    };
    const setFilmHasLoadedTrueAction = {
      type: ActionType.SET_FILM_HAS_LOADED,
      payload: true,
    };
    const setFilmHasLoadedFalseAction = {
      type: ActionType.SET_FILM_HAS_LOADED,
      payload: false,
    };
    const updatedState = stateReducer(mockAppState, setFilmHasLoadedTrueAction);
    expect(updatedState).toEqual(mockAppStateWithFilmHasLoadedFalse);
    expect(stateReducer(updatedState, setFilmHasLoadedFalseAction)).toEqual(mockAppState);
  });

  test(`handles ${ActionType.SET_GENRE} action correctly`, () => {
    const newGenre = `Very very new genre`;
    const mockAppStateWithUpdatedGenre = {
      ...mockAppState,
      [StateNS.GENRE]: newGenre,
    };
    const setNewGenreAction = {
      type: ActionType.SET_GENRE,
      payload: newGenre,
    };
    const setAllGenresAction = {
      type: ActionType.SET_GENRE,
      payload: ALL_GENRES,
    };
    const updatedState = stateReducer(mockAppState, setNewGenreAction);
    expect(updatedState).toEqual(mockAppStateWithUpdatedGenre);
    expect(stateReducer(updatedState, setAllGenresAction)).toEqual(mockAppState);
  });

  test(`handles ${ActionType.SET_IS_ONLINE} action correctly`, () => {
    const mockAppStateWithIsOnlineFalse = {
      ...mockAppState,
      [StateNS.IS_ONLINE]: false,
    };
    const setIsOnlineFalseAction = {
      type: ActionType.SET_IS_ONLINE,
      payload: false,
    };
    const setIsOnlineTrueAction = {
      type: ActionType.SET_IS_ONLINE,
      payload: true,
    };
    const updatedState = stateReducer(mockAppState, setIsOnlineFalseAction);
    expect(updatedState).toEqual(mockAppStateWithIsOnlineFalse);
    expect(stateReducer(updatedState, setIsOnlineTrueAction)).toEqual(mockAppState);
  });

  test(`handles ${ActionType.SET_PROMO_HAS_LOADED} action correctly`, () => {
    const mockAppStateWithPromoHasLoadedFalse = {
      ...mockAppState,
      [StateNS.PROMO_HAS_LOADED]: false,
    };
    const setPromoHasLoadedFalseAction = {
      type: ActionType.SET_PROMO_HAS_LOADED,
      payload: false,
    };
    const setPromoHasLoadedTrueAction = {
      type: ActionType.SET_PROMO_HAS_LOADED,
      payload: true,
    };
    const updatedState = stateReducer(mockAppState, setPromoHasLoadedFalseAction);
    expect(updatedState).toEqual(mockAppStateWithPromoHasLoadedFalse);
    expect(stateReducer(updatedState, setPromoHasLoadedTrueAction)).toEqual(mockAppState);
  });

  test(`handles ${ActionType.SET_REVIEWS_HAVE_LOADED} action correctly`, () => {
    const mockAppStateWithReviewsHaveLoadedTrue = {
      ...mockAppState,
      [StateNS.REVIEWS_HAVE_LOADED]: true,
    };
    const setReviewsHaveLoadedTrueAction = {
      type: ActionType.SET_REVIEWS_HAVE_LOADED,
      payload: true,
    };
    const setReviewsHaveLoadedFalseAction = {
      type: ActionType.SET_REVIEWS_HAVE_LOADED,
      payload: false,
    };
    const updatedState = stateReducer(mockAppState, setReviewsHaveLoadedTrueAction);
    expect(updatedState).toEqual(mockAppStateWithReviewsHaveLoadedTrue);
    expect(stateReducer(updatedState, setReviewsHaveLoadedFalseAction)).toEqual(mockAppState);
  });
});
