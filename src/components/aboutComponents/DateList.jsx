import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import SingleDate from './SingleDate';

const DateList = props => (
  <div>{props.items.map(item => <SingleDate selectItem={props.selectItem} key={uuid()} item={item} />)}</div>
);

DateList.propTypes = {
  selectItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      text: PropTypes.string,
      imageSrc: PropTypes.string
    })
  ).isRequired
};

export default DateList;
