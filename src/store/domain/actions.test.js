import {
  ActionType,
  setFavouriteFilmsAction as setFavouriteFilmsActionCreator,
  setFilmAction as setFilmActionCreator,
  setFilmsAction as setFilmsActionCreator,
  setPromoAction as setPromoActionCreator,
  setReviewsAction as setReviewsActionCreator,
} from './actions';

import {macbeth} from '../../mocks/film';
import {films} from '../../mocks/films';
import {reviews} from '../../mocks/reviews';

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
