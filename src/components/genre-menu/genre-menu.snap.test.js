import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {store} from '../../mocks/store/store';

import GenreMenu from './genre-menu';

jest.mock(`react-redux`);

test(`<GenreMenu /> renders correctly`, () => {
  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(store));

  const {container} = render(<GenreMenu onGenreChange={() => {}} />);
  expect(container).toMatchSnapshot();
});
