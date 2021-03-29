import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from '../../hooks';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';

const PrivateRoute = ({children, ...props}) => {
  const [isAuthorized, hasCheckedAuth] = useAuth();

  if (!hasCheckedAuth) {
    return <LoadingPlaceholder/>;
  }

  return isAuthorized
    ? <Route {...props}>{children}</Route>
    : <Redirect to="/login"/>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
