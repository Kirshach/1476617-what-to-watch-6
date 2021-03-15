import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchReviewsThunk} from '../../store/domain/thunks';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import Review from './Review';

const ReviewsList = ({
  dispatchFetchReviewsThunk,
  id,
  reviews,
  reviewsHaveLoaded,
}) => {
  useEffect(() => {
    if (reviewsHaveLoaded && reviews.filmId === id) {
      return;
    }
    dispatchFetchReviewsThunk(id);
  }, [id]);
  return reviewsHaveLoaded ? (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.data.map((review) => (
          <Review
            key={review.id}
            date={review.date}
            rating={review.rating}
            username={review.user.name}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  ) : (
    <LoadingPlaceholder/>
  );
};

ReviewsList.propTypes = {
  dispatchFetchReviewsThunk: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reviews: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    filmId: PropTypes.number,
  }),
  reviewsHaveLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.domain.reviews,
  reviewsHaveLoaded: state.app.reviewsHaveLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchReviewsThunk: (id) => dispatch(fetchReviewsThunk(id)),
});

const ReviewsListWithReviewsData = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListWithReviewsData;
