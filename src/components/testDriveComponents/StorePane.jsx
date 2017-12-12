import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Store from './Store';

class StorePane extends Component {
  constructor(props) {
    super(props);
    this.renderStore = this.renderStore.bind(this);
  }

  renderStore(store) {
    return <Store key={store} index={store} details={this.props.stores[store]} />;
  }

  render() {
    return (
      <div id="stores-pane" className="column">
        <h1 id="font">Information</h1>
        <Store />
      </div>
    );
  }
}

StorePane.propTypes = {
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

export default StorePane;
