import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = props => (
  <div className="carousel-item-wrapper home">
    <img src={props.img} alt="Mercedes" />
    <div className="event-info">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CarouselItem;
