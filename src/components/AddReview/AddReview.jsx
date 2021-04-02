import React, {Fragment, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, Redirect, useParams} from 'react-router-dom';

import {useForm} from '../../hooks/useForm';

import {postReviewThunk} from '../../store/domain/thunks';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import PageHeader from '../PageHeader/PageHeader';

import {useFilm} from '../../hooks/useFilm';
import {APIRoutes} from '../../const';

import {INITIAL_STATE} from './_const';
import {validate, formatValues} from './_helpers';

const AddReview = () => {
  const dispatch = useDispatch();

  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState();

  const {id} = useParams();
  const [film, filmHasLoaded] = useFilm(id);

  const {values, errors, handlers, isValid} = useForm(INITIAL_STATE, validate, hasAttemptedSubmit);

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (isSubmitting) {
      return;
    }
    setHasAttemptedSubmit(true);

    if (isValid) {
      setIsSubmitting(true);
      dispatch(postReviewThunk(id, formatValues(values)))
        .catch(() => {
          setApiError(`An error occured while submitting. Please, check your connection and try again.`);
          setIsSubmitting(false);
        });
    }
  };

  if (filmHasLoaded && !film.id) {
    return <Redirect to="/404" />;
  }

  return filmHasLoaded
    ? (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={APIRoutes.getFilmRoute(film.id)} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </PageHeader>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={onSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {new Array(10).fill(null).map((_, index) => {
                  const starsCount = index + 1;
                  return (
                    <Fragment key={starsCount}>
                      <input
                        className="rating__input"
                        id={`star-${starsCount}`}
                        type="radio"
                        checked={values.rating === String(starsCount)}
                        name="rating"
                        value={starsCount}
                        onChange={handlers.rating}
                      />
                      <label className="rating__label" htmlFor={`star-${starsCount}`}>
                        Rating {starsCount}
                      </label>
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={handlers.comment}
                value={values.comment}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={
                  isSubmitting || hasAttemptedSubmit && !isValid
                }>Post</button>
              </div>

            </div>
          </form>
          {
            hasAttemptedSubmit &&
              [[`apiError`, apiError], ...Object.entries(errors)].map(([key, error]) => (
                <p className="submit-error" key={key}>
                  {error}
                </p>
              ))
          }
        </div>

      </section>
    ) : (
      <LoadingPlaceholder />
    );
};

AddReview.propTypes = {};

export default AddReview;
