import React from 'react';
import PropTypes from 'prop-types';
import LinkSectionItem from './LinkSectionItem';

const LinksSection = ({ modelId }) => {
  const pathGarage = () => `/garage/${modelId}`;
  const pathBuy = () => `/purchase/${modelId}`;

  return (
    <div className="links-wrapper">
      <LinkSectionItem className="configure" path={pathGarage()}>
        Configure
      </LinkSectionItem>
      <LinkSectionItem className="buy" path={pathBuy()}>
        Purchase
      </LinkSectionItem>
      <LinkSectionItem className="test" path="/drive">
        Test Drive
      </LinkSectionItem>
    </div>
  );
};

LinksSection.propTypes = {
  modelId: PropTypes.string.isRequired
};

export default LinksSection;
