import React from 'react';
import KeepConnectedItem from './KeepConnectedItem';

const socialLinks = [
  <h3>Keep Connected</h3>,
  <span className="fa fa-facebook" />,
  <span className="fa fa-twitter" />,
  <span className="fa fa-google" />,
  <span className="fa fa-linkedin" />
];

const contactLinks = [
  <h3>Contact Information</h3>,
  <span className="fa fa-envelope" />,
  <span className="fa fa-map-marker" />,
  <span className="fa fa-phone" />
];

const Footer = () => (
  <footer>
    <KeepConnected />
    <ContactInfo />
    <Map />
  </footer>
);

const KeepConnected = () => <div>{socialLinks.map(link => <KeepConnectedItem key={link} title={link} />)}</div>;

const ContactInfo = () => <div>{contactLinks.map(link => <KeepConnectedItem key={link} title={link} />)}</div>;

const Map = () => (
  <div>
    <select>
      <option>All</option>
      <option>Mechanics</option>
      <option>Dealers</option>
    </select>
  </div>
);

export default Footer;
