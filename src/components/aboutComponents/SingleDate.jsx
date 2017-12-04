import React from 'react';
import PropTypes from 'prop-types';

const SingleDate = props => (
  <div onClick={() => props.handleClick(!props.selected)}>
    <p>{props.title}</p>
    {props.selected ? <p>{props.id}</p> : 'No date selected'}
  </div>
);

SingleDate.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

SingleDate.defaultProps = {
  handleClick: () => {}
  // img: ''
};
export default SingleDate;
