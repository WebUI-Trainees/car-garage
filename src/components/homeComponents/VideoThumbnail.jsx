import React from 'react';
import PropTypes from 'prop-types';

const VideoThumbnail = props => (
  <div>
    <div className="video-thumbnail" onClick={props.toggleVideo}>
      <img alt="video" src={props.src} />
    </div>
  </div>
);

VideoThumbnail.propTypes = {
  toggleVideo: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default VideoThumbnail;
