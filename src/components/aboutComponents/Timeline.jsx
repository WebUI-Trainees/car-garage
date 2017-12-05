import React from 'react';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';
import nth from 'lodash/nth';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = value => {
    this.setState({
      value
    });
    this.props.selectItem(nth(this.props.items, value));
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;

    return (
      <div className="slider">
        <Slider min={0} max={items.length} value={value} onChange={this.handleChange} />
        <div className="value">{value}</div>
      </div>
    );
  }
}

Timeline.propTypes = {
  selectItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      text: PropTypes.string,
      imageSrc: PropTypes.string
    })
  ).isRequired
};

export default Timeline;
