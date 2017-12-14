import React from 'react';
import KeepConnectedItem from './KeepConnectedItem';

const socialLinks = [
  <div>
    <h3>Keep Connected</h3>
    <ul>
      <li>
        <span className="fa fa-facebook" />
        <span>Like us on Facebook</span>
      </li>
      <li>
        <span className="fa fa-twitter" />
        <span>Follow us on Twitter</span>
      </li>
      <li>
        <span className="fa fa-google" />
        <span>Add us on Google+</span>
      </li>
    </ul>
  </div>
];

const contactLinks = [
  <div>
    <h3>Contact Information</h3>
    <ul>
      <li>
        <span className="fa fa-envelope" />
        <span>ssbenz@mercedes.com</span>
      </li>
      <li>
        <span className="fa fa-map-marker" />
        <span>Blvd. Vitosha 777, Sofia</span>
      </li>
      <li>
        <span className="fa fa-phone" />
        <span>+359 777 777 777</span>
      </li>
    </ul>
  </div>
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
