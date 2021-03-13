import {setIsAuthorizedAction, setUserDataAction, redirectAction} from './actions';
import {AppRoutes, APIRoutes} from '../../const';

export const authorize = (payload) => (dispatch, _getState, api) => {
  return api.post(APIRoutes.LOGIN, payload)
    .then(({data}) => {
      dispatch(setUserDataAction(data));
      dispatch(setIsAuthorizedAction(true));
      dispatch(redirectAction(AppRoutes.MAIN));
    });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.LOGIN)
    .then(() => dispatch(setIsAuthorizedAction(true)));
};
