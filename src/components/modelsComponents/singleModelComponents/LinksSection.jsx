import React from 'react';
import LinkSectionItem from './LinkSectionItem';

const LinksSection = () => (
  <div className="links-wrapper">
    <LinkSectionItem className="configure" path="/garage">
      Configure
    </LinkSectionItem>
    <LinkSectionItem className="buy" path="/">
      Purchase
    </LinkSectionItem>
    <LinkSectionItem className="test" path="/drive">
      Test Drive
    </LinkSectionItem>
  </div>
);

export default LinksSection;
