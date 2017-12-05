import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InboxItem from './InboxItem';

class InboxPane extends Component {
  constructor(props) {
    super(props);
    this.renderConvoSum = this.renderConvoSum.bind(this);
  }

  renderConvoSum(human) {
    return <InboxItem key={human} index={human} details={this.props.humans[human]} />;
  }

  render() {
    return (
      <div id="inbox-pane" className="column">
        <h1>Inbox</h1>
        {Object.keys(this.props.humans).map(this.renderConvoSum)}
      </div>
    );
  }
}

InboxPane.propTypes = {
  humans: PropTypes.shape({
    conversations: PropTypes.arrayOf(
      PropTypes.shape({
        who: PropTypes.string,
        text: PropTypes.string,
        time: PropTypes.number
      })
    )
  }).isRequired
};

export default InboxPane;
