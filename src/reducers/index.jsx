import { combineReducers } from 'redux';
import Conversations from './conversations';

const rootReducer = combineReducers({
  conversations: Conversations
});

export default rootReducer;
