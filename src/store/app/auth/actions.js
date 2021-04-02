const SET_HAS_CHECKED_AUTH = `app/setHasCheckedAuth`;
const SET_IS_AUTHORIZED = `app/setIsAuthorized`;
const RESET_USER_DATA = `app/resetUserData`;
const SET_USER_DATA = `app/setUserData`;

export const setIsAuthorizedAction = (payload) => ({
  type: SET_IS_AUTHORIZED,
  payload,
});

export const setHasCheckedAuthAction = (payload) => ({
  type: SET_HAS_CHECKED_AUTH,
  payload,
});

export const setUserDataAction = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const resetUserDataAction = () => ({
  type: RESET_USER_DATA,
});

export const ActionType = {
  SET_HAS_CHECKED_AUTH,
  SET_IS_AUTHORIZED,
  RESET_USER_DATA,
  SET_USER_DATA,
};
