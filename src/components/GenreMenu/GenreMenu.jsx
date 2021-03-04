import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setGenreAction, showDefaultFilmsBatchAction} from '../../store/app/actions';

export const GenreMenu = ({currentGenre, genres, setGenre, showDefaultFilmsBatch}) => {
  const getClassName = (genre) => `catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`;
  const getHandleGenreClickHandler = (genre) => (evt) => {
    evt.preventDefault();
    setGenre(genre);
    showDefaultFilmsBatch();
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
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGenre: PropTypes.func,
  showDefaultFilmsBatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.app.genre,
  genres: state.domain.genres,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(setGenreAction(genre)),
  showDefaultFilmsBatch: () => dispatch(showDefaultFilmsBatchAction()),
});

const GenreMenuWithStore = connect(mapStateToProps, mapDispatchToProps)(GenreMenu);
export default GenreMenuWithStore;
