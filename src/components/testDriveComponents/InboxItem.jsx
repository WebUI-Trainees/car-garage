import React from 'react';
import { Link } from 'react-router-dom';

const InboxItem = () => (
  <div className="inbox-item">
    <Link to="/drive/conversation/test">Conversation with ...</Link> (New)
  </div>
);

export default InboxItem;
