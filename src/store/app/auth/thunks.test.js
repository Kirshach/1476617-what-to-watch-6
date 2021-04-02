import MockAdapter from 'axios-mock-adapter';

import {REDIRECT, HANDLE_API_ERROR} from '../../middlewares';
import {APIRoutes, AppRoutes} from '../../../const';
import {api, createAPI} from '../../../api/api';
import {adaptFromApi} from '../../../utils';
import {ActionType} from './actions';

import {
  authorizeThunk,
  checkAuthThunk,
  unauthorizeThunk,
} from './thunks';

const loginAPIreply = {
  "id": 1,
  "email": `test@example.com`,
  "name": `Test Example`,
  "avatar_url": `img/1.png`,
};

const mockAPI = new MockAdapter(api);

mockAPI
  .onPost(APIRoutes.LOGIN, {
    asymmetricMatch: (data) => !data.email || !data.password
  })
  .reply(400)
  .onAny(APIRoutes.LOGIN)
  .reply(200, loginAPIreply)
  .onGet(APIRoutes.LOGOUT)
  .reply(200);

const setIsAuthorizedTrueAction = {
  type: ActionType.SET_IS_AUTHORIZED,
  payload: true,
};

const setIsAuthorizedFalseAction = {
  type: ActionType.SET_IS_AUTHORIZED,
  payload: false,
};

const setHasCheckedAuthTrueAction = {
  type: ActionType.SET_HAS_CHECKED_AUTH,
  payload: true,
};

const setUserDataAction = {
  type: ActionType.SET_USER_DATA,
  payload: adaptFromApi(loginAPIreply),
};

const resetUserDataAction = {
  type: ActionType.RESET_USER_DATA,
};

const redirectToMainAction = {
  type: REDIRECT,
  payload: AppRoutes.MAIN,
};


describe(`"auth" thunks work correctly`, () => {
  test(`authorizeThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();
    const authData = {
      email: `test@example.com`,
      password: `super-duper-password`
    };
    const authorize = authorizeThunk(authData);

    await authorize(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(4);
    expect(dispatch).toHaveBeenNthCalledWith(1, setIsAuthorizedTrueAction);
    expect(dispatch).toHaveBeenNthCalledWith(2, setUserDataAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setHasCheckedAuthTrueAction);
    expect(dispatch).toHaveBeenNthCalledWith(4, redirectToMainAction);
  });

  test(`authorizeThunk dispatches an API error action on an invalid API request`, async () => {
    const dispatch = jest.fn();

    const authDataWithEmptyPassword = {
      email: `lalala@mai.ru`,
      password: ``
    };
    const authorizeWithEmptyPassword = authorizeThunk(authDataWithEmptyPassword);

    try {
      await api.post(APIRoutes.LOGIN, authDataWithEmptyPassword);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      await authorizeWithEmptyPassword(dispatch, () => { }, api);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(handleAPIErrorAction);
    }
  });

  test(`checkAuthThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();

    const checkAuth = checkAuthThunk({headers: {fakeAuth: `true`}});
    await checkAuth(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setIsAuthorizedTrueAction);
    expect(dispatch).toHaveBeenNthCalledWith(2, setUserDataAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, setHasCheckedAuthTrueAction);
  });

  test(`checkAuthThunk dispatches an API error action on an invalid API request`, async () => {
    const dispatch = jest.fn();

    const localLoginApi = createAPI();
    const failingLocalApiMock = new MockAdapter(localLoginApi);
    failingLocalApiMock
      .onGet(APIRoutes.LOGIN)
      .reply(401);

    const checkAuth = checkAuthThunk({headers: {}});
    try {
      await checkAuth(dispatch, () => { }, localLoginApi);
    } catch (err) {
      const handleAPIErrorAction = {
        type: HANDLE_API_ERROR,
        payload: err,
      };
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(handleAPIErrorAction);
    }
  });

  test(`unauthorizeThunk invokes dispatch correctly on a valid API request`, async () => {
    const dispatch = jest.fn();

    const unauthorize = unauthorizeThunk();
    await unauthorize(dispatch, () => { }, api);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, setIsAuthorizedFalseAction);
    expect(dispatch).toHaveBeenNthCalledWith(2, resetUserDataAction);
    expect(dispatch).toHaveBeenNthCalledWith(3, redirectToMainAction);
  });
});
