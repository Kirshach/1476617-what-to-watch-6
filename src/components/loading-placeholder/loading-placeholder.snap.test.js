import React from 'react';
import {render} from '@testing-library/react';

import LoadingPlaceholder from './loading-placeholder';

test(`<LoadingPlaceholder /> renders correctly on initial mount`, () => {
  const {container} = render(<LoadingPlaceholder />);
  expect(container).toMatchSnapshot();
});
