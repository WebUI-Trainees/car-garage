import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ModelListItem = ({ model }) => {
  const path = () => `/model/${model.id}`;
  const pathGarage = '/garage';
  const pathBuy = '/garage';

  return (
    <div className="model-container">
      <h3 className="title">
        {model.name}
        <br />
        <span className="price">{model.price}</span>
        <span className="price">€</span>
      </h3>
      <div className="car-image">
        <img src={model.image} alt={model.model} />
      </div>
      <div className="buttons-container">
        <Link className="d-inline-block" to={path()}>
          <div className="button-with-icon d-inline-block">
            <div className="icon">
              <div className="icon-image" />
            </div>
            <p className="button-text">View more</p>
          </div>
        </Link>
        <Link className="d-inline-block" to={pathGarage}>
          <div className="square-button">
            <div className="icon configure" />
          </div>
        </Link>
        <Link className="d-inline-block" to={pathBuy}>
          <div className="square-button">
            <div className="icon buy" />
          </div>
        </Link>
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
