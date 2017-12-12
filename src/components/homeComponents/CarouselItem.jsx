import React from 'react';
import PropTypes from 'prop-types';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttendance = this.handleAttendance.bind(this);
    this.state = {
      attending: true
    };
  }
  handleAttendance() {
    this.setState(prevState => ({
      attending: !prevState.attending
    }));
  }

  render() {
    return (
      <div className="carousel-item-wrapper home">
        <img src={this.props.img} alt="Mercedes" />
        <div className="event-info">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          <div className="event-attend">
            <input
              type="button"
              value={this.state.attending ? 'Attend' : 'Cancel Attendance'}
              onClick={this.handleAttendance}
            />
          </div>
        </div>
      </div>
    );
  }
}

CarouselItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CarouselItem;
