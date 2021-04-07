import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {AuthNS} from '../../store/app/auth/reducer';
import {RootNS} from '../../store/root-reducer';
import {AppNS} from '../../store/app/reducer';
import {store} from '../../mocks/store/store';

import UserBlock from './user-block';

jest.mock(`react-redux`);

describe(`<UserBlock />`, () => {
  test(`renders correctly for an authorized user`, () => {
    useSelector.mockImplementation((selector) => selector(store));

    const {container} = render(
        <MemoryRouter>
          <UserBlock />
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test(`renders correctly for an unauthorized user`, () => {
    const getUnauthorizedStore = () => {
      const newStore = {...store};
      newStore[RootNS.APP][AppNS.AUTH][AuthNS.IS_AUTHORIZED] = false;
      return newStore;
    };
    useSelector.mockImplementation((selector) => selector(getUnauthorizedStore()));

    const {container} = render(
        <MemoryRouter>
          <UserBlock />
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
