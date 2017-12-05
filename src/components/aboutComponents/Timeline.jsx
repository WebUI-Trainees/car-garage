import React from 'react';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';
import nth from 'lodash/nth';

const Timeline = props => {
  const handleChange = value => {
    props.selectItem(nth(props.items, value));
  };

  const { items } = props;

  return (
    <div className="slider">
      <Slider min={0} max={items.length - 1} value={props.selectedItem.id} onChange={handleChange} />
    </div>
  );
};

Timeline.propTypes = {
  selectItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      text: PropTypes.string,
      imageSrc: PropTypes.string
    })
  ).isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Timeline;
