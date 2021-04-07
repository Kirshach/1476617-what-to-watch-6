import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter, Route} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {store} from '../../mocks/store/store';
import {AppRoutes} from '../../const';

import Main from './main';

function MockVideoPlayer() {
  return <div>This is a VideoPlayer placeholder</div>;
}

jest.mock(`react-redux`);
jest.mock(`../video-player/video-player`, () => ({
  __esModule: true,
  default: MockVideoPlayer,
}));

test(`<Logout /> renders correctly`, () => {
  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(store));

  const {container} = render(
      <MemoryRouter>
        <Route path={AppRoutes.MAIN}>
          <Main />
        </Route>
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
