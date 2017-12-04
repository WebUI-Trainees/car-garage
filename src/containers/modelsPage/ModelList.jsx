import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ModelListItem from '../../components/modelsComponents/ModelListItem';

const ModelsList = ({ carModels }) => (
  <div className="row">
    {carModels.map(carModel => (
      <div key={carModel.id} className="model-wrapper col-xs-12 col-sm-6 col-md-4 d-inline-blox">
        <ModelListItem model={carModel} />
      </div>
    ))}
  </div>
);

ModelsList.propTypes = {
  carModels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

function mapStateToProps(state) {
  return {
    carModels: state.carModels
  };
}

export default connect(mapStateToProps)(ModelsList);
