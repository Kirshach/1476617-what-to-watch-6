import React from 'react';
import {render} from '@testing-library/react';

import {macbeth} from '../../mocks/film';

import Details from './details';

test(`<Details /> renders correctly`, () => {
  const {container} = render(<Details film={macbeth}/>);
  expect(container).toMatchSnapshot();
});
