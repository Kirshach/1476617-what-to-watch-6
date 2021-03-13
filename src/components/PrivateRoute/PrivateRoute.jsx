import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const PrivateRoute = ({isAuthorized, children, ...props}) => {
  return isAuthorized
    ? <Route {...props}>{children}</Route>
    : <Redirect to="/login"/>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: state.app.isAuthorized,
});

const PrivateRouteWithStore = connect(mapStateToProps)(PrivateRoute);

export default PrivateRouteWithStore;
