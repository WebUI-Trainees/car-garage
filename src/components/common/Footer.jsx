import React from 'react';
import KeepConnectedItem from './KeepConnectedItem';

const socialLinks = [
  <div>
    <h3 id="footer-heading">Keep Connected</h3>
    <span className="fa fa-facebook" />
    <span>Like us on Facebook</span>
    <span className="fa fa-twitter" />
    <span>Follow us on Twitter</span>
    <span className="fa fa-google" />
    <span>Add us on Google+</span>
  </div>
];

const contactLinks = [
  <div>
    <h3 id="footer-heading">Contact Information</h3>
    <span className="fa fa-envelope" />
    <span>ssbenz@mercedes.com</span>
    <span className="fa fa-map-marker" />
    <span>Blvd. Vitosha 777, Sofia</span>
    <span className="fa fa-phone" />
    <span>+359 777 777 777</span>
  </div>
];

const services = [
  <div>
    <h3 id="footer-heading">Services</h3>
    <span className="fa fa-car" />
    <span>Rent a Car</span>
    <span className="fa fa-credit-card" />
    <span>Leasing options</span>
    <span className="fa fa-shield" />
    <span>Insurance</span>
  </div>
];

const Footer = () => (
  <footer>
    <KeepConnected />
    <ContactInfo />
    <Services />
  </footer>
);

const KeepConnected = () => <div>{socialLinks.map(link => <KeepConnectedItem key={link} title={link} />)}</div>;

const ContactInfo = () => <div>{contactLinks.map(link => <KeepConnectedItem key={link} title={link} />)}</div>;

const Services = () => <div>{services.map(link => <KeepConnectedItem key={link} title={link} />)}</div>;

export default Footer;
