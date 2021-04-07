import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import SiteLogo from './site-logo';

test(`<SiteLogo /> renders correctly`, () => {
  const {container} = render(
      <MemoryRouter>
        <SiteLogo />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
