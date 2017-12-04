import React from 'react';
import LinkSectionItem from './LinkSectionItem';

const LinksSection = () => (
  <div className="links-wrapper">
    <LinkSectionItem className="configure">Configure</LinkSectionItem>
    <LinkSectionItem className="buy">Purchase</LinkSectionItem>
    <LinkSectionItem className="test">Test Drive</LinkSectionItem>
  </div>
);

export default LinksSection;
