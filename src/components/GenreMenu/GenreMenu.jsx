import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setGenreAction, showDefaultFilmsAmountAction} from '../../store/app/actions';

export const GenreMenu = ({currentGenre, genres, setGenre, showDefaultFilmsAmount}) => {
  const getClassName = (genre) => `catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`;
  const getHandleGenreClickHandler = (genre) => (evt) => {
    evt.preventDefault();
    setGenre(genre);
    showDefaultFilmsAmount();
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
  showDefaultFilmsAmount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.app.genre,
  genres: state.domain.genres,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(setGenreAction(genre)),
  showDefaultFilmsAmount: () => dispatch(showDefaultFilmsAmountAction()),
});

const GenreMenuWithStore = connect(mapStateToProps, mapDispatchToProps)(GenreMenu);
export default GenreMenuWithStore;
