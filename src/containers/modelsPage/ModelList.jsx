import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ModelListItem from '../../components/modelsComponents/ModelListItem';

const ModelsList = ({ carModels }) => (
  <div className="models-wrapper">
    {carModels.map(carModel => (
      <div key={carModel.id} className="single-model d-inline-block">
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
