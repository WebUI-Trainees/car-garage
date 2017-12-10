import React from 'react';
import PropTypes from 'prop-types';

const DateDetails = ({ selectedItem }) => (
  <div className="details-container">
    <div className="date-info">{selectedItem.text}</div>
    <div className="about-image-container">
      <img alt="history" src={selectedItem.imageSrc} />
    </div>
  </div>
);

DateDetails.propTypes = {
  selectedItem: PropTypes.shape({
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  }).isRequired
};

export default DateDetails;
