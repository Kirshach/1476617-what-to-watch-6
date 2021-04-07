import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {unauthorizeThunk} from '../../store/app/auth/thunks';
import {AppRoutes} from '../../const';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(unauthorizeThunk());
  }, []);
  return <Redirect to={AppRoutes.MAIN}/>;
};

Logout.propTypes = {};

export default Logout;
