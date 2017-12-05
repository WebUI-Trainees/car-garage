import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Store extends Component {
  constructor(props) {
    super(props);
    this.getCount = this.getCount.bind(this);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getCount(status) {
    return this.props.details.orders.filter(n => n.status === status).length;
  }

  render() {
    return (
      <div className="store">
        <div className="name">{this.props.index}</div>
        <div className="orders">
          <div>
            <img alt="" src="/src/images/driveAssets/order-confirmed.png" /> {this.getCount('Open')}
          </div>
          <div>
            <img alt="" src="/src/images/driveAssets/order-oven.png" /> {this.getCount('Confirmed')}
          </div>
          <div>
            <img alt="" src="/src/images/driveAssets/order-delivered.png" /> {this.getCount('Tested')}
          </div>
        </div>
      </div>
    );
  }
}

Store.propTypes = {
  details: PropTypes.shape({
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        human: PropTypes.string,
        time: PropTypes.date,
        cars: PropTypes.arrayOf(PropTypes.shape({ model: PropTypes.string, engine: PropTypes.string }))
      })
    )
  }).isRequired,
  index: PropTypes.string.isRequired
};

export default Store;
