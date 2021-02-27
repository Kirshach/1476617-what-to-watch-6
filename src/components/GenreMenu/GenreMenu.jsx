import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setGenre} from '../../store/actions';

export const GenreMenu = ({currentGenre, genres, setGenreAction}) => {
  const getClassName = (genre) => `catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`;
  const getHandleGenreClickHandler = (genre) => (evt) => {
    evt.preventDefault();
    setGenreAction(genre);
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
  setGenreAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentGenre: state.genre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  setGenreAction: (genre) => dispatch(setGenre(genre))
});

const GenreMenuWithStore = connect(mapStateToProps, mapDispatchToProps)(GenreMenu);
export default GenreMenuWithStore;
