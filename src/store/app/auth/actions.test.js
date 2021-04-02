import {
  ActionType,
  resetUserDataAction as resetUserDataActionCreator,
  setHasCheckedAuthAction as setHasCheckedAuthActionCreator,
  setIsAuthorizedAction as setIsAuthorizedActionCreator,
  setUserDataAction as setUserDataActionCreator,
} from './actions';

describe(`"auth" action creators return correct action objects: `, () => {
  test(`resetUserDataAction`, () => {
    const resetUserDataAction = {
      type: ActionType.RESET_USER_DATA,
    };
    expect(resetUserDataActionCreator()).toEqual(resetUserDataAction);
  });

  test(`setHasCheckedAuthAction`, () => {
    const setHasCheckedAuthActionTrue = {
      type: ActionType.SET_HAS_CHECKED_AUTH,
      payload: true,
    };
    const setHasCheckedAuthActionFalse = {
      type: ActionType.SET_HAS_CHECKED_AUTH,
      payload: false,
    };
    expect(setHasCheckedAuthActionCreator(true)).toEqual(setHasCheckedAuthActionTrue);
    expect(setHasCheckedAuthActionCreator(false)).toEqual(setHasCheckedAuthActionFalse);
  });

  test(`setIsAuthorizedAction`, () => {
    const setIsAuthorizedActionTrue = {
      type: ActionType.SET_IS_AUTHORIZED,
      payload: true,
    };

    const setIsAuthorizedActionFalse = {
      type: ActionType.SET_IS_AUTHORIZED,
      payload: false,
    };

    expect(setIsAuthorizedActionCreator(true)).toEqual(setIsAuthorizedActionTrue);
    expect(setIsAuthorizedActionCreator(false)).toEqual(setIsAuthorizedActionFalse);
  });

  test(`setUserDataAction`, () => {
    const userData = {
      avatarUrl: `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`,
      email: `ivanov@ivan.ru`,
      name: `Ivanov Ivan`,
      id: 1,
    };
    const setUserDataAction = {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    };
    expect(setUserDataActionCreator(userData)).toEqual(setUserDataAction);
  });
});
