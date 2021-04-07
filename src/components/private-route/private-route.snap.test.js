import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {store} from '../../mocks/store/store';

import PrivateRoute from './private-route';

jest.mock(`react-redux`);

test(`<PageNotFound /> renders correctly`, () => {
  useSelector.mockImplementation((selector) => selector(store));

  const {container} = render(
      <MemoryRouter>
        <PrivateRoute />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
