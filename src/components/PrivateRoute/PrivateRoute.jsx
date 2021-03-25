import React, {useSelector} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {isAuthorizedSelector} from '../../store/app/auth/selectors';

const PrivateRoute = ({children, ...props}) => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  return isAuthorized
    ? <Route {...props}>{children}</Route>
    : <Redirect to="/login"/>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
