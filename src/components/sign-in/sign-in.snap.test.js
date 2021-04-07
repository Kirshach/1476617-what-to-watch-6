import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {AuthNS} from '../../store/app/auth/reducer';
import {RootNS} from '../../store/root-reducer';
import {AppNS} from '../../store/app/reducer';
import {store} from '../../mocks/store/store';

import SignIn from './sign-in';

jest.mock(`react-redux`);

test(`<SignIn /> renders correctly`, () => {
  const getUnauthorizedStore = () => {
    const newStore = {...store};
    newStore[RootNS.APP][AppNS.AUTH][AuthNS.IS_AUTHORIZED] = false;
    return newStore;
  };

  useDispatch.mockReturnValue(() => Promise.resolve());
  useSelector.mockImplementation((selector) => selector(getUnauthorizedStore()));

  const {container} = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
