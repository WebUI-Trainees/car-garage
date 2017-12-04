import React from 'react';
import PropTypes from 'prop-types';

const ModelListItem = ({ model }) => (
  <div className="model-container text-center">
    <h3 className="model text-left">{model.name}</h3>
    <h3 className="model text-left">{model.price}</h3>
    <div className="car-image">
      <img src={model.image} alt={model.model} />
    </div>
    <div className="buttons-container">
      <a className="d-inline-block">
        <div className="button-with-icon d-inline-block">
          <div className="icon">
            <div className="icon-image" />
          </div>
          <p className="button-text">View more</p>
        </div>
      </a>
      <a className="d-inline-block">
        <div className="square-button">
          <div className="icon configure" />
        </div>
      </a>
      <a className="d-inline-block">
        <div className="square-button">
          <div className="icon buy" />
        </div>
      </a>
    </div>
  </div>
);

ModelListItem.propTypes = {
  model: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default ModelListItem;
