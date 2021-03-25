import {ActionType} from './actions';

const IS_AUTHORIZED = `isAuthorized`;
const USER_DATA = `userData`;

const initialState = {
  [IS_AUTHORIZED]: false,
  [USER_DATA]: {
    avatarUrl: null,
    email: null,
    name: null,
    id: null,
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_AUTHORIZED:
      return {
        ...state,
        [IS_AUTHORIZED]: action.payload,
      };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        [USER_DATA]: action.payload,
      };
    default:
      return state;
  }
};

export const AuthNS = {
  USER_DATA,
  IS_AUTHORIZED,
};
