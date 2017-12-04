import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { DatePicker, SelectedDate } from '../../actions/DatePicker';

import SingleDate from './SingleDate';

const DateList = props => (
  <div>
    {props.items.map(item => (
      <SingleDate
        handleClick={props.selectItem}
        key={uuid()}
        selected={props.date.selected}
        id={item.id}
        title={item.title}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  date: state.date,
  items: state.items
});

const mapDispatchToProps = dispatch => bindActionCreators({ datePick: DatePicker, selectItem: SelectedDate }, dispatch);

DateList.propTypes = {
  selectItem: PropTypes.func.isRequired,
  date: PropTypes.shape({
    img: PropTypes.string,
    selected: PropTypes.bool.isRequired
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

DateList.defaultProps = {
  date: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
