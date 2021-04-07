import React from 'react';
import {render} from '@testing-library/react';

import {reviewData as review} from '../../mocks/reviews';
import Review from './review';

test(`<Review /> renders correctly`, () => {
  const {container} = render(
      <Review
        username={review.user.name}
        rating={review.rating}
        date={review.date}
        comment={ review.comment }
      />
  );
  expect(container).toMatchSnapshot();
});
