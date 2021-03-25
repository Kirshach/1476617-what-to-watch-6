import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {isAuthorizedSelector, userDataSelector} from '../../store/app/auth/selectors.js';
import {AppRoutes} from '../../const.js';

const UserBlock = () => {
  const isAuthorized = useSelector(isAuthorizedSelector);
  const {avatarUrl} = useSelector(userDataSelector);

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

export default UserBlock;
