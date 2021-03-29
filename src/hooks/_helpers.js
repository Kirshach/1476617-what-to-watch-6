import {useDispatch, useSelector} from 'react-redux';

export const getUseServerDataHook = (dataSelector, dataHasLoadedSelector, shouldFetchData, fetchDataThunk) =>
  (...args) => {
    const dispatch = useDispatch();
    const data = useSelector(dataSelector);
    const dataHasLoaded = useSelector(dataHasLoadedSelector);

    if (shouldFetchData(data, dataHasLoaded)) {
      dispatch(fetchDataThunk(...args));
    }

    return [data, dataHasLoaded];
  };
