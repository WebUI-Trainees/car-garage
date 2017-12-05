import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class InboxItem extends Component {
  constructor(props) {
    super(props);
    this.messageSummary = this.messageSummary.bind(this);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  sortByDate(a, b) {
    if (a.time < b.time) {
      return -1;
    } else if (a.time > b.time) {
      return 1;
    }

    return 0;
  }

  messageSummary(conversations) {
    const lastMessage = conversations.sort(this.sortByDate)[0];

    return `${lastMessage.who} said: "${lastMessage.text}" @ ${lastMessage.time.toDateString()}`;
  }

  render() {
    return (
      <div className="inbox-item">
        <Link to={`/drive/conversation/${encodeURIComponent(this.props.index)}`}>
          Conversation with {this.props.index}
        </Link>
        ({this.props.details.orders.sort(this.sortByDate)[0].status})
      </div>
    );
  }
}

InboxItem.propTypes = {
  details: PropTypes.shape({
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        human: PropTypes.string,
        time: PropTypes.date,
        cars: PropTypes.arrayOf(
          PropTypes.shape({
            model: PropTypes.string,
            engine: PropTypes.string
          })
        )
      })
    )
  }).isRequired,
  index: PropTypes.string.isRequired
};

export default InboxItem;
