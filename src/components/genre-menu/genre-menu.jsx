import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {genreSelector} from '../../store/app/state/selectors';
import {setGenreAction} from '../../store/app/state/actions';
import {genresSelector} from '../../store/domain/derived';

const getClassName = (genre, currentGenre) => (
  `catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`
);

export const GenreMenu = ({onGenreChange}) => {
  const dispatch = useDispatch();
  const genres = useSelector(genresSelector);
  const currentGenre = useSelector(genreSelector);

  const getHandleGenreClickHandler = (genre) => (evt) => {
    evt.preventDefault();
    dispatch(setGenreAction(genre));
    onGenreChange();
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={getClassName(genre, currentGenre)}>
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
