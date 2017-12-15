import { setTimeout } from 'timers';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#455A64',
    color: 'white',
    fontStyle: 'italic'
  }
};

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttendance = this.handleAttendance.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.state = {
      attending: false,
      modalIsOpen: false,
      user: ''
    };
  }

  openModal() {
    this.setState(prevState => ({ modalIsOpen: true, attending: !prevState.attending, user: prevState.user }));
    setTimeout(this.closeModal, 2000);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleAttendance() {
    this.setState(prevState => ({
      attending: !prevState.attending,
      modalIsOpen: true
    }));
  }

  handleInputOnChange(e) {
    const name = e.target.value;

    this.setState(() => ({
      user: name
    }));
  }

  render() {
    return (
      <div>
        <div className="carousel-item-wrapper home">
          <img src={this.props.img} alt="Mercedes" />
          <div className="event-info">
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
            <div className="event-attend">
              {this.state.modalIsOpen}
              <input type="text" onChange={this.handleInputOnChange} placeholder="Type your name" />
              <input
                type="button"
                value={this.state.attending ? 'Cancel Attendance' : 'Attend'}
                onClick={this.openModal}
              />
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          style={customStyles}
          contentLabel="Modal"
          ariaHideApp={false}
        >
          <h1>
            {this.state.attending ? `Your spot will be reserved, ${this.state.user}!` : 'We are sorry to lose you!'}
          </h1>
        </Modal>
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
