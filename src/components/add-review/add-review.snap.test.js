import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MemoryRouter, Route} from 'react-router-dom';
import {render} from '@testing-library/react';

import {INITIAL_STATE, DomainNS} from '../../store/domain/reducer';
import {store} from '../../mocks/store/store';
import {useFilm} from '../../hooks/use-film';
import {macbeth} from '../../mocks/film';
import {AppRoutes} from '../../const';

import AddReview from './add-review';

jest.mock(`react-redux`);
jest.mock(`../../hooks/use-film`);

describe(`<AddReview />`, () => {
  const {id} = macbeth;
  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(store));

  test(`renders correctly for a film that has loaded`, () => {
    useFilm.mockReturnValueOnce([macbeth, true]);

    const {container} = render(
        <MemoryRouter initialEntries={[AppRoutes.getAddReviewRoute(id)]}>
          <Route path={AppRoutes.ADD_REVIEW}>
            <AddReview />
          </Route>
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test(`renders correctly for a film that has not loaded`, () => {
    const initialFilm = INITIAL_STATE[DomainNS.FILM];
    useFilm.mockReturnValueOnce([initialFilm, false]);

    const {container} = render(
        <MemoryRouter initialEntries={[AppRoutes.getAddReviewRoute(id)]}>
          <AddReview />
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
