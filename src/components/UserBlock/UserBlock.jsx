import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoutes} from '../../const.js';

const UserBlock = ({isAuthorized, avatarUrl = ``}) => {
  return (
    <div className="user-block">
      {isAuthorized ? (
        <div className="user-block__avatar">
          <img
            src={avatarUrl}
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      ) : (
        <Link to={AppRoutes.LOGIN} className="user-block__link">
        Sign in
        </Link>
      )}
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthorized: state.app.isAuthorized,
  avatarUrl: state.app.userData.avatarUrl,
});

const UserBlockWithStore = connect(mapStateToProps)(UserBlock);

export default UserBlockWithStore;
