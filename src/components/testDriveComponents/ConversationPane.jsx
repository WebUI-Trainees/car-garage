import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Message from './Message';
import Human from '../../common/types';

class ConversationPane extends React.Component {
  componentWillMount() {
    this.props.onComponentDidMount();
  }

  get emptyMessage() {
    return (
      <div>
        <h2 id="conversation-heading">Select a Conversation from the Inbox</h2>
        <img alt="" src="/src/images/driveAssets/select.png" width="150" />
      </div>
    );
  }

  get conversationComponent() {
    return [
      <h1 id="font" key={uuid()}>
        Conversation
      </h1>,
      <h3 key={uuid()}>{this.props.humanId}</h3>,
      <div key={uuid()} id="messages">
        {this.props.human.conversations.map(this.renderMessage)}
      </div>
    ];
  }

  renderMessage(val) {
    return <Message who={val.who} text={val.text} key={uuid()} />;
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
