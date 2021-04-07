import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {store} from '../../mocks/store/store';

import OfflineScreen from './offline-screen';

jest.mock(`react-redux`);

test(`<MyList /> renders correctly`, () => {
  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(store));

  const {container} = render(
      <MemoryRouter>
        <OfflineScreen />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
