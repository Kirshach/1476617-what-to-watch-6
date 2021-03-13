import {setFilms} from './actions';
import {setIsLoadingFilmsAction} from '../app/actions';
import {APIRoutes} from '../../const';

export const fetchFilms = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.FILMS)
    .then(({data}) => {
      dispatch(setFilms(data));
      dispatch(setIsLoadingFilmsAction(false));
    });
};
