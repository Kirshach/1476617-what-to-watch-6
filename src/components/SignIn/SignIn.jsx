import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {useForm} from '../../hooks/useForm';
import {authorizeThunk} from '../../store/app/thunks';

import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

const initialState = {
  email: ``,
  password: ``,
};

const SignIn = ({dispatchAuthorizeAction}) => {
  const {values, handlers} = useForm(initialState);
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatchAuthorizeAction(values);
  };

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" noUserBlock />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onFormSubmit}>
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

SignIn.propTypes = {
  dispatchAuthorizeAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAuthorizeAction: (payload) => dispatch(authorizeThunk(payload))
});

const SignInWithStore = connect(null, mapDispatchToProps)(SignIn);

export default SignInWithStore;
