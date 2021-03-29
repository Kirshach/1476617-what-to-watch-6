import {ActionType} from './actions';

const HAS_CHECKED_AUTH = `hasCheckedAuth`;
const IS_AUTHORIZED = `isAuthorized`;
const USER_DATA = `userData`;

const initialState = {
  [HAS_CHECKED_AUTH]: false,
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
    case ActionType.SET_HAS_CHECKED_AUTH:
      return {
        ...state,
        [HAS_CHECKED_AUTH]: action.payload,
      };
    default:
      return state;
  }
};

export const AuthNS = {
  HAS_CHECKED_AUTH,
  IS_AUTHORIZED,
  USER_DATA,
};
