import React from 'react';
import PropType from 'prop-types';

const KeepConnectedItem = props => <div>{props.title}</div>;

KeepConnectedItem.propTypes = {
  title: PropType.string.isRequired
};

export default KeepConnectedItem;
