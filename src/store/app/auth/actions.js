const SET_HAS_CHECKED_AUTH = `app/setHasCheckedAuth`;
const SET_IS_AUTHORIZED = `app/setIsAuthorized`;
const SET_USER_DATA = `app/setUserData`;
const AUTHORIZE = `app/authorize`;

export const setIsAuthorizedAction = (payload) => ({
  type: SET_IS_AUTHORIZED,
  payload,
});

export const setHasCheckedAuth = (payload) => ({
  type: SET_HAS_CHECKED_AUTH,
  payload,
});

export const setUserDataAction = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const ActionType = {
  SET_HAS_CHECKED_AUTH,
  SET_IS_AUTHORIZED,
  SET_USER_DATA,
  AUTHORIZE,
};
