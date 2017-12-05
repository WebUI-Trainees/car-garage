/* eslint react/prop-types: 0 */

import React from 'react';

const ModelPage = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default ModelPage;
