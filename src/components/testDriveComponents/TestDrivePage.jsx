import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InboxPane from './InboxPane';
import ConversationPane from './ConversationPane';
import StorePane from './StorePane';

const TestDrivePage = () => (
  <div className="container">
    <InboxPane />
    <Route
      exact
      path="/drive"
      render={() => (
        <div id="conversation-pane" className="column">
          <h4>Select a Conversation from the Inbox</h4>
        </div>
      )}
    />
    <Switch>
      <Route path="/drive/conversation/:human" component={ConversationPane} />
    </Switch>
    <StorePane />
  </div>
);

export default TestDrivePage;
