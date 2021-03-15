import React from 'react';
import PropTypes from 'prop-types';

const Review = ({
  comment,
  rating,
  date,
  username
}) => {
  date = new Date(date);
  const formattedDate = date.toLocaleDateString(`en-US`, {
    month: `long`,
    day: `numeric`,
    year: `numeric`,
  });
  const formattedRating = rating.toString().replace(`.`, `,`);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{username}</cite>
          <time className="review__date" dateTime={date.toISOString()}>{formattedDate}</time>
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
