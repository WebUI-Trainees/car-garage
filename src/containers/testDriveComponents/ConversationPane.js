import { connect } from 'react-redux';
import ConversationPane from '../../components/testDriveComponents/ConversationPane';
import { fatchConversation } from '../../actions';

const mapStateToProps = state => ({
  human: state.conversation.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onComponentDidMount: () => dispatch(fatchConversation(ownProps.humanId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationPane);
