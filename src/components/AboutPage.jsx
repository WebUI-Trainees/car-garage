import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DateList from './aboutComponents/DateList';
import Timeline from './aboutComponents/Timeline';
import selectItem from '../actions/selectItem';
import DateDetails from './aboutComponents/DateDetails';

const AboutPage = props => (
  <div>
    <Timeline items={props.items} selectItem={props.selectItem} />
    <DateList items={props.items} selectItem={props.selectItem} />
    <DateDetails selectedItem={props.selectedItem} />
  </div>
);

const mapStateToProps = state => ({
  selectedItem: state.selectedItem,
  items: state.items
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectItem }, dispatch);

AboutPage.propTypes = {
  selectItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
