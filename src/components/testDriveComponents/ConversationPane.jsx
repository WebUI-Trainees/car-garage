import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
// import db from '../../sample-data';
import Human from '../../common/types';

class ConversationPane extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.loadSampleData = this.loadSampleData.bind(this);
  // }

  // Handle when User navigates from / to /conversation/:human
  componentWillMount() {
    // this.loadSampleData(this.props.human);
    this.props.onComponentDidMount();
  }

  // Handle when User navigates between conversations
  // componentWillReceiveProps(nextProps) {
  //   this.loadSampleData(nextProps.human);
  // }

  get emptyMessage() {
    return <h4>Select a Conversation from the Inbox</h4>;
  }

  get conversationComponent() {
    return [
      <h1>Conversation</h1>,
      <h3>{this.props.humanId}</h3>,
      <div id="messages">{this.props.human.conversations.map(this.renderMessage)}</div>
    ];
  }

  // loadSampleData(human) {
  //   if (human) this.setState({ conversation: db.humans[human].conversations });
  // }

  renderMessage(val, idx) {
    return <Message who={val.who} text={val.text} key={idx} />;
  }

  render() {
    return (
      <div id="conversation-pane" className="column">
        {this.props.human ? this.conversationComponent : this.emptyMessage}
      </div>
    );
  }
}

ConversationPane.propTypes = {
  human: Human,
  humanId: PropTypes.string,
  onComponentDidMount: PropTypes.func
};

ConversationPane.defaultProps = {
  human: null,
  humanId: '',
  onComponentDidMount: () => true
};

export default ConversationPane;
