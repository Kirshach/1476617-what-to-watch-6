import React from 'react';
import PropTypes from 'prop-types';

import {formatDate, formatCommentRating} from './_helpers';

const Review = ({
  comment,
  rating,
  date,
  username
}) => {
  const parsedDate = new Date(date);
  const formattedDate = formatDate(parsedDate);
  const formattedRating = formatCommentRating(rating);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{username}</cite>
          <time className="review__date" dateTime={parsedDate.toISOString()}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formattedRating}</div>
    </div>
  );
};

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Review;
