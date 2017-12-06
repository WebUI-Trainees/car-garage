import React from 'react';

const VideoSection = () => (
  <section className="video-section-wrapper">
    <div className="video-background-container">
      <div className="cover-video">
        <div className="poster" />
        <div className="video">
          <video loop="loop" autoPlay="autoplay" preload="auto" muted>
            Your browser does not support the video tag. You should
            <a href="http://whatbrowser.org/"> consider updating</a>.
            <source src="/src/videos/mercedes-video.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      </div>
      <div className="overlay" />
    </div>
    <div className="video-content-wrapper">
      <div className="heading-content">
        <div className="model-name">The BMW 2 Series Convertible</div>
      </div>
      <div className="mouse-scroll-icon-wrapper">
        <div className="mouse">
          <div className="wheel" />
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
