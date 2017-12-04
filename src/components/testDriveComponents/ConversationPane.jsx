/* eslint react/prop-types: 0 */

import React from 'react';
import Message from './Message';
import db from '../../sample-data';

class ConversationPane extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.loadSampleData = this.loadSampleData.bind(this);
  }
  // Handle when User navigates from / to /conversation/:human
  componentWillMount() {
    this.loadSampleData(this.props.match.params.human);
  }

  // Handle when User navigates between conversations
  componentWillReceiveProps(nextProps) {
    this.loadSampleData(nextProps.match.params.human);
  }

  loadSampleData(human) {
    this.setState({ conversation: db.humans[human].conversations });
  }

  sortByDateDesc(a, b) {
    if (a.time < b.time) {
      return -1;
    } else if (a.time > b.time) {
      return 1;
    }

    return 0;
  }
  renderMessage(val) {
    return <Message who={val.who} text={val.text} key={val.time.getTime()} />;
  }

  render() {
    return (
      <div id="conversation-pane" className="column">
        <h1>Conversation</h1>
        <h3>{this.props.match.human}</h3>
        <div id="messages">{this.state.conversation.sort(this.sortByDateDesc).map(this.renderMessage)}</div>
      </div>
    );
  }
}

export default ConversationPane;
