import {filmsHaveLoadedSelector} from '../store/app/state/selectors';
import {filmsSelector} from '../store/domain/selectors';
import {fetchFilmsThunk} from '../store/domain/thunks';
import {getUseServerDataHook} from './_helpers';

const shouldFetchFilms = (films) => !films[0];

export const useFilms = getUseServerDataHook(
    filmsSelector,
    filmsHaveLoadedSelector,
    shouldFetchFilms,
    fetchFilmsThunk,
);
