const AUTHORIZE = `app/authorize`;
const SET_IS_AUTHORIZED = `app/setIsAuthorized`;
const SET_USER_DATA = `app/setUserData`;

export const setIsAuthorizedAction = (payload) => ({
  type: SET_IS_AUTHORIZED,
  payload,
});

export const setUserDataAction = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const ActionType = {
  SET_IS_AUTHORIZED,
  SET_USER_DATA,
  AUTHORIZE,
};
