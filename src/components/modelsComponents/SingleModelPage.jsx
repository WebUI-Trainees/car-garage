/* eslint react/prop-types: 0 */
import React from 'react';
// import CarDesignCarousel from './singleModelComponents/Carousel';
import VideoSection from './singleModelComponents/VideoSection';
import LinksSection from './singleModelComponents/LinksSection';

const ModelPage = ({ match }) => (
  <div>
    <VideoSection />
    {/* <CarDesignCarousel /> */}
    <h3>ID: {match.params.id}</h3>
    <LinksSection />
  </div>
);

export default ModelPage;
