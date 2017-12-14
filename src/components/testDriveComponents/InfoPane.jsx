import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

class InfoPane extends Component {
  constructor(props) {
    super(props);
    this.renderInfo = this.renderInfo.bind(this);
  }

  renderInfo(info) {
    return <Info details={this.props.stores[info]} />;
  }

  render() {
    return (
      <div id="stores-pane" className="column">
        <h1 id="font">Information</h1>
        <Info />
      </div>
    );
  }
}

InfoPane.propTypes = {
  stores: PropTypes.shape({
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        human: PropTypes.string,
        time: PropTypes.date,
        cars: PropTypes.arrayOf(PropTypes.shape({ model: PropTypes.string, engine: PropTypes.string }))
      })
    )
  }).isRequired
};

export default InfoPane;
