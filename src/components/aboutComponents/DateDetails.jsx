import React from 'react';
import PropTypes from 'prop-types';

const DateDetails = ({ selectedItem }) => (
  <div>
    <div>{selectedItem.text}</div>
    <div>
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
