import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {render} from '@testing-library/react';

import {StateNS} from '../../store/app/state/reducer';
import {RootNS} from '../../store/root-reducer';
import {AppNS} from '../../store/app/reducer';
import {store} from '../../mocks/store/store';
import {macbeth} from '../../mocks/film';

import ReviewsList from './reviews-list';

jest.mock(`react-redux`);

describe(`<ReviewsList />`, () => {
  useDispatch.mockReturnValue(jest.fn(() => Promise.resolve()));
  const {id} = macbeth;

  test(`renders correctly for a loaded review list`, () => {
    useSelector.mockImplementationOnce((selector) => selector(store));

    const {container} = render(<ReviewsList id={id} />);
    expect(container).toMatchSnapshot();
  });

  test(`renders correctly for an unloaded review list`, () => {
    const getStoreWithReviewsHaveLoadedFalse = () => {
      const newStore = {...store};
      newStore[RootNS.APP][AppNS.STATE][StateNS.REVIEWS_HAVE_LOADED] = false;
      return newStore;
    };
    useSelector.mockImplementationOnce((selector) => selector(getStoreWithReviewsHaveLoadedFalse()));

    const {container} = render(<ReviewsList id={id} />);
    expect(container).toMatchSnapshot();
  });
});
