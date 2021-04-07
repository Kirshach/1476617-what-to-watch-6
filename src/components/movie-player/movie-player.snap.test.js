import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter, Route} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {store} from '../../mocks/store/store';
import {useFilm} from '../../hooks/use-film';
import {macbeth} from '../../mocks/film';
import {AppRoutes} from '../../const';

import MoviePlayer from './movie-player';

function mockVideoPlayer() {
  const MockVideoPlayer = () => <div>This is a VideoPlayer placeholder</div>;
  return React.forwardRef(MockVideoPlayer);
}

jest.mock(`../video-player/video-player`, () => ({
  __esModule: true,
  default: mockVideoPlayer(),
}));

jest.mock(`react-redux`);
jest.mock(`../../hooks/use-film`);

test(`<MoviePlayer /> renders correctly`, () => {
  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(store));
  useFilm.mockReturnValue([macbeth, true]);

  const {id} = macbeth;
  const {container} = render(
      <MemoryRouter initialEntries={[AppRoutes.gerMoviePlayerRoute(id)]}>
        <Route path={AppRoutes.MOVIE_PLAYER}>
          <MoviePlayer />
        </Route>
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
