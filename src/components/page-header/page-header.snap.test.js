import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {store} from '../../mocks/store/store';

import PageHeader from './page-header';

jest.mock(`react-redux`);

test(`<PageHeader /> renders correctly`, () => {
  useSelector.mockImplementation((selector) => selector(store));

  const {container} = render(
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
