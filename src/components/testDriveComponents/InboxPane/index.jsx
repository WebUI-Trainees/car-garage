import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InboxItem from './InboxItem';

class InboxPane extends Component {
  constructor(props) {
    super(props);
    this.renderConvoSum = this.renderConvoSum.bind(this);
  }

  componentDidMount() {
    this.props.onComponentDidMount();
  }

  renderConvoSum(human) {
    return <InboxItem key={human} index={human} />;
  }

  render() {
    return (
      <div id="inbox-pane" className="column inboxPane">
        <h1>Inbox</h1>
        <span onClick={() => this.componentDidMount()} className="refresh">
          R
        </span>
        {this.props.humans.map(this.renderConvoSum)}
      </div>
    );
  }
}

InboxPane.propTypes = {
  humans: PropTypes.arrayOf(PropTypes.string),
  onComponentDidMount: PropTypes.func
};

InboxPane.defaultProps = {
  humans: [],
  onComponentDidMount: () => true
};

export default InboxPane;
