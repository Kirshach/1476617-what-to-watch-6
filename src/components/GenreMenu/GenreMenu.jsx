import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {setGenreAction} from '../../store/app/state/actions';
import {genreSelector} from '../../store/app/state/selectors';
import {genresSelector} from '../../store/domain/derived';

export const GenreMenu = ({onGenreChange}) => {
  const genres = useSelector(genresSelector);
  const dispatch = useDispatch();
  const currentGenre = useSelector(genreSelector);

  const getClassName = (genre) => `catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`;
  const getHandleGenreClickHandler = (genre) => (evt) => {
    evt.preventDefault();
    dispatch(setGenreAction(genre));
    onGenreChange();
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

GenreMenu.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
};

export default GenreMenu;
