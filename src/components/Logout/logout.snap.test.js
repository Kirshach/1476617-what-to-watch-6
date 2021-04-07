import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import {useDispatch} from 'react-redux';

jest.mock(`react-redux`);

import Logout from './logout';

test(`<Logout /> renders correctly`, () => {
  useDispatch.mockReturnValue(() => Promise.resolve());

  const {container} = render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
