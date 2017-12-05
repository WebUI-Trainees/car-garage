import React from 'react';
import PropTypes from 'prop-types';

const SingleDate = ({ item, selectItem }) => (
  <div onClick={() => selectItem(item)}>
    <p>{item.date}</p>
  </div>
);

SingleDate.propTypes = {
  selectItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string,
    imageSrc: PropTypes.string
  }).isRequired
};

export default SingleDate;
