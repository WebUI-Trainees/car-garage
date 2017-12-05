import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ModelListItem = ({ model }) => {
  const path = () => `/model/${model.id}`;

  return (
    <div className="model-container text-center">
      <h3 className="model text-left">{model.name}</h3>
      <h3 className="model text-left">{model.price}</h3>
      <div className="car-image">
        <img src={model.image} alt={model.model} />
      </div>
      <div className="buttons-container">
        <div className="d-inline-block">
          <div className="button-with-icon d-inline-block">
            <div className="icon">
              <div className="icon-image" />
            </div>
            <Link to={path()}>
              <p className="button-text">View more</p>
            </Link>
          </div>
        </div>
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
};

ModelListItem.propTypes = {
  model: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default ModelListItem;
