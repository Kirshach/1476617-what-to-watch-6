import React from 'react';
import {render} from '@testing-library/react';

import {macbeth} from '../../mocks/film';

import Description from './description';

test(`<Description /> renders correctly`, () => {
  const {container} = render(<Description film={macbeth}/>);
  expect(container).toMatchSnapshot();
});
