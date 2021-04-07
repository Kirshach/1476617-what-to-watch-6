import React from 'react';
import {render} from '@testing-library/react';

import {macbeth} from '../../mocks/film';

import MovieCard from './movie-card';

function MockVideoPlayer() {
  return <div>This is a VideoPlayer placeholder</div>;
}

jest.mock(`../video-player/video-player`, () => ({
  __esModule: true,
  default: MockVideoPlayer,
}));

test(`<MovieCard /> renders correctly`, () => {
  const {container} = render(<MovieCard film={macbeth} />);
  expect(container).toMatchSnapshot();
});
