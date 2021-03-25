import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setGenreAction, showDefaultFilmsAmountAction} from '../../store/app/state/actions';
import {genreSelector} from '../../store/app/state/selectors';
import {Genres} from '../../const';

const genres = Object.values(Genres);

export const GenreMenu = () => {
  const dispatch = useDispatch();
  const currentGenre = useSelector(genreSelector);

  const getClassName = (genre) => `catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`;
  const getHandleGenreClickHandler = (genre) => (evt) => {
    evt.preventDefault();
    dispatch(setGenreAction(genre));
    dispatch(showDefaultFilmsAmountAction());
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={getClassName(genre)}>
          <a href="#" onClick={getHandleGenreClickHandler(genre)} className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GenreMenu;
