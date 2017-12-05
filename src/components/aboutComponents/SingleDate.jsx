import React from 'react';
import PropTypes from 'prop-types';

const SingleDate = props => (
  <div onClick={() => props.handleClick(props.date)}>
    <p>{props.date}</p>
    {props.selectedDate === props.date ? props.text : ''}
  </div>
);

SingleDate.propTypes = {
  handleClick: PropTypes.func,
  selectedDate: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
};

SingleDate.defaultProps = {
  handleClick: () => {},
  date: 'Not selected',
  selectedDate: 'test',
  text: ''
};
export default SingleDate;
