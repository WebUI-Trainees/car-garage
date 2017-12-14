/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import InboxPane from '../../containers/testDriveComponents/InboxPane';
import ConversationPane from '../../containers/testDriveComponents/ConversationPane';
import InfoPane from './InfoPane';
import Chat from './Chat';

class TestDrivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: {}
    };
  }

  render() {
    return (
      <div id="bckgd">
        <div id="header" />
        <div className="container">
          <InboxPane />
          <Switch>
            <Route path="/drive" exact component={ConversationPane} />
            <Route
              path="/drive/conversation/:humanId"
              component={props => <ConversationPane humanId={props.match.params.humanId} />}
            />
          </Switch>
          <InfoPane stores={this.state.stores} />
        </div>
        <Chat />
      </div>
    );
  }
}

export default TestDrivePage;
