/* eslint react/prop-types: 0 */

import React from 'react';
import CarDesignCarousel from './singleModelComponents/Carousel';
import VideoSection from './singleModelComponents/VideoSection';
import LinksSection from './singleModelComponents/LinksSection';
import QuoteSection from './singleModelComponents/QuoteSection';

const ModelPage = ({ match }) => (
  <div>
    <VideoSection />
    <QuoteSection />
    <CarDesignCarousel />
    <h3>ID: {match.params.id}</h3>
    <LinksSection />
  </div>
);

export default ModelPage;
