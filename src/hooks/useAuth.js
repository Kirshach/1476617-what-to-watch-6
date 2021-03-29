import {hasCheckedAuthSelector, isAuthorizedSelector} from '../store/app/auth/selectors';
import {checkAuthThunk} from '../store/app/auth/thunks';
import {getUseServerDataHook} from './_helpers';

const shouldCheckAuth = (_, hasCheckedAuth) => !hasCheckedAuth;

export const useAuth = getUseServerDataHook(
    isAuthorizedSelector,
    hasCheckedAuthSelector,
    shouldCheckAuth,
    checkAuthThunk,
);
