import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({ data }) => (
  <div className="carousel-item-wrapper">
    <div className="background-image-container">
      <img src={data.image} alt={data.description} />
    </div>
    <p className="description">{data.text}</p>
  </div>
);

CarouselItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default CarouselItem;
