import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import {render} from '@testing-library/react';

import {macbeth} from '../../mocks/film';
import {AppRoutes} from '../../const';

import TabBar from './tab-bar';

test(`<TabBar /> renders correctly`, () => {
  const {id} = macbeth;
  const {container} = render(
      <MemoryRouter initialEntries={[AppRoutes.getFilmRoute(id)]} >
        <Route path={AppRoutes.FILM}>
          <TabBar />
        </Route>
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
