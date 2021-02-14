import {useParams} from 'react-router-dom';

export function useQueryFilmById(films) {
  const {id} = useParams();
  return films.find((film) => film.id === Number(id));
}
