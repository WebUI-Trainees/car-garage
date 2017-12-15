import React from 'react';
import ModalVideo from 'react-modal-video';
import VideoThumbnail from './VideoThumbnail';

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
          videoId="JTf36MOuo8Y"
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="video-row">
          <VideoThumbnail toggleVideo={this.openModal} src="src\images\home\video1.png" />
          <VideoThumbnail toggleVideo={this.openModal} src="src\images\home\video2.png" />
        </div>
      </div>
    );
  }
}
export default ModalVideos;
