import {
  ActionType,
  setFavouriteFilmsHaveLoadedAction as setFavouriteFilmsHaveLoadedActionCreator,
  setFilmHasLoadedAction as setFilmHasLoadedActionCreator,
  setFilmsHaveLoadedAction as setFilmsHaveLoadedActionCreator,
  setIsOnlineAction as setIsOnlineActionCreator,
  setPromoHasLoadedAction as setPromoHasLoadedActionCreator,
  setReviewsHaveLoadedAction as setReviewsHaveLoadedActionCreator,
  setGenreAction as setGenreActionCreator,
} from './actions';

import {AllGenres} from '../../../const';

describe(`"state" action creators return correct action objects:`, () => {

  test(`setFavouriteFilmsHaveLoadedAction`, () => {
    const setFavouriteFilmsHaveLoadedActionFalse = {
      type: ActionType.SET_FAVOURITE_FILMS_HAVE_LOADED,
      payload: false,
    };
    const setFavouriteFilmsHaveLoadedActionTrue = {
      type: ActionType.SET_FAVOURITE_FILMS_HAVE_LOADED,
      payload: true,
    };

    expect(setFavouriteFilmsHaveLoadedActionCreator(false)).toEqual(setFavouriteFilmsHaveLoadedActionFalse);
    expect(setFavouriteFilmsHaveLoadedActionCreator(true)).toEqual(setFavouriteFilmsHaveLoadedActionTrue);
  });

  test(`setFilmHasLoadedAction`, () => {
    const setFilmHasLoadedActionFalse = {
      type: ActionType.SET_FILM_HAS_LOADED,
      payload: false,
    };
    const setFilmHasLoadedActionFalseTrue = {
      type: ActionType.SET_FILM_HAS_LOADED,
      payload: true,
    };

    expect(setFilmHasLoadedActionCreator(false)).toEqual(setFilmHasLoadedActionFalse);
    expect(setFilmHasLoadedActionCreator(true)).toEqual(setFilmHasLoadedActionFalseTrue);
  });

  test(`setFilmsHaveLoadedAction`, () => {
    const setFilmsHaveLoadedActionFalse = {
      type: ActionType.SET_FILMS_HAVE_LOADED,
      payload: false,
    };
    const setFilmsHaveLoadedActionTrue = {
      type: ActionType.SET_FILMS_HAVE_LOADED,
      payload: true,
    };

    expect(setFilmsHaveLoadedActionCreator(false)).toEqual(setFilmsHaveLoadedActionFalse);
    expect(setFilmsHaveLoadedActionCreator(true)).toEqual(setFilmsHaveLoadedActionTrue);
  });

  test(`setIsOnlineAction`, () => {
    const setIsOnlineActionFalse = {
      type: ActionType.SET_IS_ONLINE,
      payload: false,
    };
    const setIsOnlineActionTrue = {
      type: ActionType.SET_IS_ONLINE,
      payload: true,
    };

    expect(setIsOnlineActionCreator(false)).toEqual(setIsOnlineActionFalse);
    expect(setIsOnlineActionCreator(true)).toEqual(setIsOnlineActionTrue);
  });

  test(`setPromoHasLoadedAction`, () => {
    const setPromoHasLoadedActionFalse = {
      type: ActionType.SET_PROMO_HAS_LOADED,
      payload: false,
    };
    const setPromoHasLoadedActionTrue = {
      type: ActionType.SET_PROMO_HAS_LOADED,
      payload: true,
    };

    expect(setPromoHasLoadedActionCreator(false)).toEqual(setPromoHasLoadedActionFalse);
    expect(setPromoHasLoadedActionCreator(true)).toEqual(setPromoHasLoadedActionTrue);
  });

  test(`setReviewsHaveLoadedAction`, () => {
    const setReviewsHaveLoadedActionFalse = {
      type: ActionType.SET_REVIEWS_HAVE_LOADED,
      payload: false,
    };
    const setReviewsHaveLoadedActionTrue = {
      type: ActionType.SET_REVIEWS_HAVE_LOADED,
      payload: true,
    };

    expect(setReviewsHaveLoadedActionCreator(false)).toEqual(setReviewsHaveLoadedActionFalse);
    expect(setReviewsHaveLoadedActionCreator(true)).toEqual(setReviewsHaveLoadedActionTrue);
  });

  test(`setGenreAction`, () => {
    const mindBlowingAdventure = `Mind-blowing adventure`;

    const setGenreActionAllGenre = {
      type: ActionType.SET_GENRE,
      payload: AllGenres,
    };
    const setGenreActionMindBlowingComedy = {
      type: ActionType.SET_GENRE,
      payload: mindBlowingAdventure,
    };

    expect(setGenreActionCreator(AllGenres)).toEqual(setGenreActionAllGenre);
    expect(setGenreActionCreator(mindBlowingAdventure)).toEqual(setGenreActionMindBlowingComedy);
  });
});
