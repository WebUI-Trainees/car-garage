import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import SelectedDate from '../../actions/DatePicker';

import SingleDate from './SingleDate';

const DateList = props => (
  <div>
    {props.items.map(item => (
      <SingleDate
        handleClick={props.selectItem}
        key={uuid()}
        selectedDate={props.selectedDate}
        date={item.title}
        text={item.text}
        imageSrc={item.imageSrc}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
  items: state.items
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectItem: SelectedDate }, dispatch);

DateList.propTypes = {
  selectItem: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
