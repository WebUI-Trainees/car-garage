/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import InboxPane from '../../containers/testDriveComponents/InboxPane';
import ConversationPane from '../../containers/testDriveComponents/ConversationPane';
import StorePane from './StorePane';
import Chat from './Chat';
// import db from '../../sample-data';
import { store } from '../../index';
import { fatchConversations } from '../../actions';

class TestDrivePage extends Component {
  constructor(props) {
    super(props);

    // this.loadSampleData = this.loadSampleData.bind(this);

    this.state = {
      stores: {}
    };
  }

  // Handle when user navigates to a conversation directly without first loading the index...
  // componentWillMount() {
  //   if ('human' in this.props.match.params) {
  //     this.loadSampleData();
  //   }
  // }

  // loadSampleData() {
  //   this.setState(db);
  // }

  render() {
    return (
      <div>
        <div id="header" />
        <button onClick={this.loadSampleData}>Load Previous History</button>
        <button onClick={() => store.dispatch(fatchConversations())}>Fetch Data</button>
        <div className="container">
          <InboxPane />
          <Switch>
            <Route path="/drive" exact component={ConversationPane} />
            <Route
              path="/drive/conversation/:humanId"
              component={props => <ConversationPane humanId={props.match.params.humanId} />}
            />
          </Switch>
          <StorePane stores={this.state.stores} />
        </div>
        <Chat />
      </div>
    );
  }
}

export default TestDrivePage;
