import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkSectionItem = props => {
  const { className, children, path, ...linkClasses } = props;

  linkClasses.className = `image ${className}`;

  return (
    <Link to={path} className="d-inline-block single-link">
      <div className="link-container">
        <div className="image-wrapper">
          <div {...linkClasses} />
        </div>
      </div>
      <p className="title">{children}</p>
    </Link>
  );
};

LinkSectionItem.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LinkSectionItem;
