import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MemoryRouter, Route} from 'react-router';
import {render} from '@testing-library/react';

import {store} from '../../mocks/store/store';
import {useFilm} from '../../hooks/use-film';
import {macbeth} from '../../mocks/film';
import {films} from '../../mocks/films';
import {AppRoutes} from '../../const';

import * as helpers from './_helpers';

import Film from './film';

function MockVideoPlayer() {
  return <div>This is a VideoPlayer placeholder</div>;
}

jest.mock(`react-redux`);
jest.mock(`../../hooks/use-film`);
jest.spyOn(helpers, `getSimilarFilms`).mockReturnValue(films);
jest.mock(`../video-player/video-player`, () => ({
  __esModule: true,
  default: MockVideoPlayer,
}));

describe(`<Film />`, () => {
  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(store));
  useFilm.mockReturnValue([macbeth]);

  test(`renders main overview tab correctly`, () => {
    const {id} = macbeth;
    const path = AppRoutes.getFilmRoute(id);

    const {container} = render(
        <MemoryRouter initialEntries={[path]}>
          <Route path={AppRoutes.FILM}>
            <Film film={macbeth} />
          </Route>
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test(`renders details tab correctly`, () => {
    const {id} = macbeth;
    const path = AppRoutes.getFilmDetailsRoute(id);

    const {container} = render(
        <MemoryRouter initialEntries={[path]}>
          <Route path={AppRoutes.FILM}>
            <Film film={macbeth} />
          </Route>
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test(`renders reviews tab correctly`, () => {
    const {id} = macbeth;
    const path = AppRoutes.getFilmReviewsRoute(id);

    const {container} = render(
        <MemoryRouter initialEntries={[path]}>
          <Route path={AppRoutes.FILM}>
            <Film film={macbeth} />
          </Route>
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

});
