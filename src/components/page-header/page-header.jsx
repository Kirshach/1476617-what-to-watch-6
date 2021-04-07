import React from 'react';
import PropTypes from 'prop-types';

import SiteLogo from '../site-logo/site-logo';
import UserBlock from '../user-block/user-block';

const PageHeader = ({
  children,
  className = ``,
  noUserBlock = false
}) => {
  return (
    <header className={`page-header ${className}`}>
      <SiteLogo />
      {children}
      {!noUserBlock && <UserBlock />}
    </header>
  );
};

PageHeader.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  noUserBlock: PropTypes.bool,
};

export default React.memo(PageHeader);
