/* eslint react/prop-types: 0 */

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import CarDesignCarousel from './singleModelComponents/Carousel';
import VideoSection from './singleModelComponents/VideoSection';
import LinksSection from './singleModelComponents/LinksSection';
import QuoteSection from './singleModelComponents/QuoteSection';

const ModelPage = ({ model }) => (
  <div>
    <VideoSection name={model.name} />
    <QuoteSection quote={model.quote} />
    <CarDesignCarousel carDetails={model.carDescription} />
    <LinksSection modelId={model.id} />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  model: _.find(state.carModels, { id: ownProps.match.params.id })
});

export default connect(mapStateToProps)(ModelPage);
