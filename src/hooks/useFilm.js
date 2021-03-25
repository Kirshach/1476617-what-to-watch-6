import {useSelector, useDispatch} from 'react-redux';

import {filmHasLoadedSelector} from '../store/app/state/selectors';
import {filmSelector} from '../store/domain/selectors';
import {fetchFilmThunk} from '../store/domain/thunks';

export const useFilm = (id) => {
  const dispatch = useDispatch();
  const film = useSelector(filmSelector);
  const filmHasLoaded = useSelector(filmHasLoadedSelector);

  if (!film.id) {
    dispatch(fetchFilmThunk(id));
  }

  return {film, filmHasLoaded};
};
