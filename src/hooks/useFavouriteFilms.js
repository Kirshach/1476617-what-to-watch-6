import {favouriteFilmsHaveLoadedSelector} from '../store/app/state/selectors';
import {favouriteFilmsSelector} from '../store/domain/selectors';
import {fetchFavouriteFilmsThunk} from '../store/domain/thunks';
import {getUseServerDataHook} from './_helpers';

const shouldFetchFavouriteFilms = (films) => films === null;

export const useFavouriteFilms = getUseServerDataHook(
    favouriteFilmsSelector,
    favouriteFilmsHaveLoadedSelector,
    shouldFetchFavouriteFilms,
    fetchFavouriteFilmsThunk,
);
