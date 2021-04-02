import {
  authReducer,
  initialState,
  AuthNS,
} from './reducer';

import {ActionType} from './actions';

const mockAuthState = {
  [AuthNS.HAS_CHECKED_AUTH]: true,
  [AuthNS.IS_AUTHORIZED]: true,
  [AuthNS.USER_DATA]: {
    id: 1,
    email: `lalala@mail.ru`,
    name: `lalala`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`
  }
};

describe(`"auth" reducer`, () => {
  test(`returns initial state after being called with no first argument`, () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  test(`returns initialState after an unexpected action`, () => {
    const unexpectedAction = {
      type: `someRandomActionTypeWhichClearlyDoesNotExist`,
      payload: `Whatever payload, shouldn't make sense anyways`,
    };
    expect(authReducer(initialState, unexpectedAction)).toEqual(initialState);
  });

  test(`handles ${ActionType.RESET_USER_DATA} action correctly`, () => {
    const mockAuthStateWithInitialUserData = {
      ...mockAuthState,
      [AuthNS.USER_DATA]: initialState[AuthNS.USER_DATA],
    };
    const resetUseDataAction = {
      type: ActionType.RESET_USER_DATA,
    };
    expect(authReducer(mockAuthState, resetUseDataAction)).toEqual(mockAuthStateWithInitialUserData);
  });

  test(`handles ${ActionType.SET_HAS_CHECKED_AUTH} action correctly`, () => {
    const mockAuthStateWithHasCheckedAuthFalse = {
      ...mockAuthState,
      [AuthNS.HAS_CHECKED_AUTH]: false,
    };
    const setHasCheckedAuthFalseAction = {
      type: ActionType.SET_HAS_CHECKED_AUTH,
      payload: false,
    };
    const setHasCheckedAuthTrueAction = {
      type: ActionType.SET_HAS_CHECKED_AUTH,
      payload: true,
    };
    const updatedState = authReducer(mockAuthState, setHasCheckedAuthFalseAction);
    expect(updatedState).toEqual(mockAuthStateWithHasCheckedAuthFalse);
    expect(authReducer(updatedState, setHasCheckedAuthTrueAction)).toEqual(mockAuthState);
  });

  test(`handles ${ActionType.SET_IS_AUTHORIZED} action correctly`, () => {
    const mockAuthStateWithIsAuthorizedFalse = {
      ...mockAuthState,
      [AuthNS.IS_AUTHORIZED]: false,
    };
    const setHasCheckedAuthFalseAction = {
      type: ActionType.SET_IS_AUTHORIZED,
      payload: false,
    };
    const setHasCheckedAuthTrueAction = {
      type: ActionType.SET_IS_AUTHORIZED,
      payload: true,
    };
    const updatedState = authReducer(mockAuthState, setHasCheckedAuthFalseAction);
    expect(updatedState).toEqual(mockAuthStateWithIsAuthorizedFalse);
    expect(authReducer(updatedState, setHasCheckedAuthTrueAction)).toEqual(mockAuthState);
  });

  test(`handles ${ActionType.SET_USER_DATA} action correctly`, () => {
    const mockUser = {
      id: 228,
      email: `mama@mia.it`,
      name: `Luigu`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
    };
    const mockAuthStateWithUpdatedUserData = {
      ...mockAuthState,
      [AuthNS.USER_DATA]: mockUser,
    };
    const setUserDataAction = {
      type: ActionType.SET_USER_DATA,
      payload: mockUser,
    };
    expect(authReducer(mockAuthState, setUserDataAction)).toEqual(mockAuthStateWithUpdatedUserData);
  });
});
