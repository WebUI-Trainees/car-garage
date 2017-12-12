import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilterOptions from '../../components/modelsComponents/FilterOptions';
import ModelsList from '../../components/modelsComponents/ModelList';

class CarModelsSection extends Component {
  constructor(props) {
    super(props);

    this.state = { model: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ model: val });
  }

  render() {
    const optionsArray = Array.from(new Set(this.props.carModels.map(item => item.model)));

    optionsArray.unshift('All Models');

    return (
      <div className="models-section">
        <h1>All Models</h1>
        <FilterOptions options={optionsArray} selectedOption={this.state.model} changeOption={this.handleChange} />
        <ModelsList data={this.props.carModels} filter={this.state.model} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carModels: state.carModels
  };
}

CarModelsSection.propTypes = {
  carModels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(CarModelsSection);
