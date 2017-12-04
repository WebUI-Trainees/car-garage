/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import InboxPane from './InboxPane';
import ConversationPane from './ConversationPane';
import StorePane from './StorePane';
import db from '../../sample-data';

class TestDrivePage extends Component {
  constructor(props) {
    super(props);

    this.loadSampleData = this.loadSampleData.bind(this);

    this.state = {
      humans: {},
      stores: {}
    };
  }

  // Handle when user navigates to a conversation directly without first loading the index...
  componentWillMount() {
    console.log(this.props.match.params);

    if ('human' in this.props.match.params) {
      this.loadSampleData();
    }
  }

  loadSampleData() {
    this.setState(db);
  }

  render() {
    return (
      <div>
        <div id="header" />
        <button onClick={this.loadSampleData}>Load Previous History</button>
        <div className="container">
          <InboxPane humans={this.state.humans} />
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
          <StorePane stores={this.state.stores} />
        </div>
      </div>
    );
  }
}

export default TestDrivePage;
