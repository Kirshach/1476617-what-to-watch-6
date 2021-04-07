import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {store} from '../../mocks/store/store';

import PageNotFound from './page-not-found';

jest.mock(`react-redux`);

test(`<PageNotFound /> renders correctly`, () => {
  useSelector.mockImplementation((selector) => selector(store));
  const {container} = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
