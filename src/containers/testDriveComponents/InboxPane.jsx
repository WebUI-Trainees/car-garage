import { connect } from 'react-redux';
import InboxPane from '../../components/testDriveComponents/InboxPane';
import { fatchConversations } from '../../actions';

const mapStateToProps = state => ({
  humans: state.humans.data
});

const mapDispatchToProps = dispatch => ({
  onComponentDidMount: () => dispatch(fatchConversations())
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxPane);
