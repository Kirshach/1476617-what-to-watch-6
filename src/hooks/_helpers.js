import {useDispatch, useSelector} from 'react-redux';
import {isOnlineSelector} from '../store/app/state/selectors';

export const getUseServerDataHook = (dataSelector, dataHasLoadedSelector, shouldFetchData, fetchDataThunk) =>
  (...args) => {
    const dispatch = useDispatch();
    const data = useSelector(dataSelector);
    const dataHasLoaded = useSelector(dataHasLoadedSelector);
    const isOnline = useSelector(isOnlineSelector);

    if (shouldFetchData(data, dataHasLoaded) && isOnline) {
      dispatch(fetchDataThunk(...args));
    }

    return [data, dataHasLoaded];
  };
