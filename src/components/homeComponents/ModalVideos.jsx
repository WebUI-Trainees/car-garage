import React from 'react';
import ModalVideo from 'react-modal-video';
import Thumbnail from 'react-thumbnail';

class ModalVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          onClick={this.openModal}
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => this.setState({ isOpen: false })}
        />

        <Thumbnail
          onClick={this.openModal}
          width={250}
          height={250}
          page="https://facebook.github.io/react/docs/getting-started.html"
          scale={4}
        />
      </div>
    );
  }
}
export default ModalVideos;
