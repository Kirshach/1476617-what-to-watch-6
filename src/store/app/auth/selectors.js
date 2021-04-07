import {RootNS} from '../../root-reducer';
import {AppNS} from '../reducer';
import {AuthNS} from './reducer';

const {USER_DATA, IS_AUTHORIZED, HAS_CHECKED_AUTH} = AuthNS;
const {APP} = RootNS;
const {AUTH} = AppNS;

const getStateSlice = (state) => state[APP][AUTH];

export const hasCheckedAuthSelector = (state) => getStateSlice(state)[HAS_CHECKED_AUTH];
export const isAuthorizedSelector = (state) => getStateSlice(state)[IS_AUTHORIZED];
export const userDataSelector = (state) => getStateSlice(state)[USER_DATA];
