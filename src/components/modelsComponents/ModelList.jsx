import React from 'react';
import PropTypes from 'prop-types';

import ModelListItem from './ModelListItem';

const ModelsList = ({ data, filter }) => {
  const filteredData = data.filter(item => !filter || item.model === filter);

  return (
    <div className="models-wrapper">
      {filteredData.map(carModel => (
        <div key={carModel.id} className="single-model d-inline-block">
          <ModelListItem model={carModel} />
        </div>
      ))}
    </div>
  );
};

ModelsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  filter: PropTypes.string.isRequired
};

export default ModelsList;
