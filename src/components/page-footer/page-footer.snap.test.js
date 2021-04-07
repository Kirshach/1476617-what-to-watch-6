import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';

import PageFooter from './page-footer';
import {history} from '../../history';

test(`<PageFooter /> renders correctly`, () => {
  const {container} = render(
      <Router history={history}>
        <PageFooter />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
