
import {
  setIsAuthorizedAction,
  setUserDataAction,
  resetUserDataAction,
  setHasCheckedAuth
} from './actions';
import {AppRoutes, APIRoutes} from '../../../const';
import {redirectAction, handleAPIErrorAction} from '../../middlewares';

export const authorizeThunk = (payload) => (dispatch, _getState, api) => {
  return api.post(APIRoutes.LOGIN, payload)
    .then(({data}) => {
      dispatch(setIsAuthorizedAction(true));
      dispatch(setUserDataAction(data));
      dispatch(setHasCheckedAuth(true));
      dispatch(redirectAction(AppRoutes.MAIN));
    })
    .catch((error) => {
      dispatch(handleAPIErrorAction(error));
    });
};

export const unauthorizeThunk = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.LOGOUT)
    .then(() => {
      dispatch(setIsAuthorizedAction(false));
      dispatch(resetUserDataAction());
      dispatch(setHasCheckedAuth(true));
      dispatch(redirectAction(AppRoutes.MAIN));
    })
    .catch((error) => {
      dispatch(handleAPIErrorAction(error));
    });
};


export const checkAuthThunk = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.LOGIN)
    .then(({data}) => {
      dispatch(setIsAuthorizedAction(true));
      dispatch(setUserDataAction(data));
      dispatch(setHasCheckedAuth(true));
    })
    .catch((error) => {
      dispatch(handleAPIErrorAction(error));
    });
};
