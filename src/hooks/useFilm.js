import {filmHasLoadedSelector} from '../store/app/state/selectors';
import {filmSelector} from '../store/domain/selectors';
import {fetchFilmThunk} from '../store/domain/thunks';
import {getUseServerDataHook} from './_helpers';

const shouldFetchFilm = (film) => !film.id;

export const useFilm = getUseServerDataHook(
    filmSelector,
    filmHasLoadedSelector,
    shouldFetchFilm,
    fetchFilmThunk,
);
