import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Message extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <p className={this.props.who}>
        <img alt="" src={`/src/images/driveAssets/${this.props.who}.png`} /> {this.props.text}
      </p>
    );
  }
}

Message.propTypes = {
  who: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Message;
