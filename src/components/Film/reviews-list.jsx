import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {reviewsHaveLoadedSelector} from '../../store/app/state/selectors';
import {reviewsSelector} from '../../store/domain/selectors';
import {fetchReviewsThunk} from '../../store/domain/thunks';

import LoadingPlaceholder from '../loading-placeholder/loading-placeholder';
import Review from './review1';

const ReviewsList = ({id}) => {
  const dispatch = useDispatch();

  const reviews = useSelector(reviewsSelector);
  const reviewsHaveLoaded = useSelector(reviewsHaveLoadedSelector);

  useEffect(() => {
    if (reviewsHaveLoaded && reviews.id === id) {
      return;
    }
    dispatch(fetchReviewsThunk(id));
  }, [id]);

  return reviewsHaveLoaded ? (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.data.length > 0
          ? reviews.data.map((review) => (
            <Review
              key={review.id}
              date={review.date}
              rating={review.rating}
              username={review.user.name}
              comment={review.comment}
            />
          )) : (
            <div className="movie-card__no-reviews">No reviews left yet</div>
          )}
      </div>
    </div>
  ) : (
    <LoadingPlaceholder/>
  );
};

ReviewsList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReviewsList;
