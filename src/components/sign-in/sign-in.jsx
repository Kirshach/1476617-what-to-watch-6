import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';

import {isAuthorizedSelector} from '../../store/app/auth/selectors';
import {authorizeThunk} from '../../store/app/auth/thunks';
import {useForm} from '../../hooks/use-form';
import {AppRoutes} from '../../const';

import {INITIAL_STATE} from './_const';
import {validate} from './_helpers';

import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';


const SignIn = () => {
  const dispatch = useDispatch();

  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState();

  const {values, handlers, errors, isValid} = useForm(INITIAL_STATE, validate);

  const isAuthorized = useSelector(isAuthorizedSelector);

  if (isAuthorized) {
    return <Redirect to={AppRoutes.MAIN} />;
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (isSubmitting) {
      return;
    }
    setHasAttemptedSubmit(true);

    if (isValid) {
      setIsSubmitting(true);
      dispatch(authorizeThunk(values))
        .catch(() => {
          setApiError(`An error occured while submitting. Please, check your connection and try again.`);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" noUserBlock />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">

              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={values.email}
                onChange={handlers.email}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>

            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={values.password}
                onChange={handlers.password}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>

            {
              hasAttemptedSubmit &&
              [[`apiError`, apiError], ...Object.entries(errors)].map(([key, error]) => (
                <p className="submit-error" key={key}>
                  {error}
                </p>
              ))
            }

          </div>

          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>

        </form>
      </div>

      <PageFooter />
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
