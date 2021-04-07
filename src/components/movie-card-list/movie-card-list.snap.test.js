import React from 'react';
import {render} from '@testing-library/react';

import {films} from '../../mocks/films';

import MovieCardList from './movie-card-list';

function MockVideoPlayer() {
  return <div>This is a VideoPlayer placeholder</div>;
}

jest.mock(`../video-player/video-player`, () => ({
  __esModule: true,
  default: MockVideoPlayer,
}));

test(`<MovieCardList /> renders correctly`, () => {
  const {container} = render(<MovieCardList films={films}/>);
  expect(container).toMatchSnapshot();
});
