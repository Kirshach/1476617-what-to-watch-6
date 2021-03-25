import {AppRoutes, APIRoutes} from '../../../const';

import {redirectAction} from '../../middlewares';
import {setIsAuthorizedAction, setUserDataAction} from './actions';

export const authorizeThunk = (payload) => (dispatch, _getState, api) => {
  return api.post(APIRoutes.LOGIN, payload)
    .then(({data}) => {
      dispatch(setUserDataAction(data));
      dispatch(setIsAuthorizedAction(true));
      dispatch(redirectAction(AppRoutes.MAIN));
    });
};

export const checkAuthThunk = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.LOGIN)
    .then(() => dispatch(setIsAuthorizedAction(true)));
};
