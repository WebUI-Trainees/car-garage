import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const InboxItem = ({ index }) => (
  <div className="inbox-item">
    <Link to={`/drive/conversation/${encodeURIComponent(index)}`}>Conversation with {index}</Link>
  </div>
);

InboxItem.propTypes = {
  index: PropTypes.string.isRequired
};

export default InboxItem;
