/* eslint react/prop-types: 0 */

import React from 'react';
import CarDesignCarousel from './singleModelComponents/Carousel';
import VideoSection from './singleModelComponents/VideoSection';
import LinksSection from './singleModelComponents/LinksSection';
import QuoteSection from './singleModelComponents/QuoteSection';

const ModelPage = () => (
  <div>
    <VideoSection />
    <QuoteSection />
    <CarDesignCarousel />
    <LinksSection />
  </div>
);

export default ModelPage;
