import React, {Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {Link, Redirect, useParams} from 'react-router-dom';

import {useForm} from '../../hooks/useForm';

import {postReviewThunk} from '../../store/domain/thunks';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import PageHeader from '../PageHeader/PageHeader';

import {INITIAL_STATE} from './_const';
import {useFilm} from '../../hooks/useFilm';

export const AddReview = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {film, filmHasLoaded} = useFilm(id);

  const {values, values: {comment}, handlers} = useForm(INITIAL_STATE);

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReviewThunk(id, values));
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
                  <Link to={`films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
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
                      <input className="rating__input" id={`star-${starsCount}`} type="radio" name="rating" value={starsCount} onChange={handlers.rating}/>
                      <label className="rating__label" htmlFor={`star-${starsCount}`}>Rating {starsCount}</label>
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
                value={comment}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    ) : (
      <LoadingPlaceholder />
    );
};

AddReview.propTypes = {};

export default AddReview;
