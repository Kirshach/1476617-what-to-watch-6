import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {store} from '../../mocks/store/store';

import MyList from './my-list';

function MockVideoPlayer() {
  return <div>This is a VideoPlayer placeholder</div>;
}

jest.mock(`react-redux`);
jest.mock(`../video-player/video-player`, () => ({
  __esModule: true,
  default: MockVideoPlayer,
}));

test(`<MyList /> renders correctly`, () => {
  useSelector.mockImplementation((selector) => selector(store));
  useDispatch.mockReturnValue(() => Promise.resolve());

  const {container} = render(
      <MemoryRouter>
        <MyList />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
