import {RootNS} from '../../rootReducer';
import {AppNS} from '../reducer';
import {AuthNS} from './reducer';

const {APP} = RootNS;
const {AUTH} = AppNS;
const {USER_DATA, IS_AUTHORIZED} = AuthNS;

const getStateSlice = (state) => state[APP][AUTH];

export const userDataSelector = (state) => getStateSlice(state)[USER_DATA];
export const isAuthorizedSelector = (state) => getStateSlice(state)[IS_AUTHORIZED];
