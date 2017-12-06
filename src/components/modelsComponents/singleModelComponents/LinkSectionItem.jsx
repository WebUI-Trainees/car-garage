import React from 'react';
import PropTypes from 'prop-types';

const LinkSectionItem = props => {
  const { className, children, ...linkClasses } = props;

  linkClasses.className = `image ${className}`;

  return (
    <a className="d-inline-block single-link">
      <div {...linkClasses} />
      <p className="title">{children}</p>
    </a>
  );
};

LinkSectionItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LinkSectionItem;
