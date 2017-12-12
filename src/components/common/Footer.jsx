import React from 'react';
import KeepConnectedItem from './KeepConnectedItem';

const socialLinks = ['Facebook', 'Twitter', 'Google Plus', 'LinkedIn', 'E-Mail', 'Adress', 'Telephone'];

const Footer = () => (
  <footer>
    <KeepConnected />
    <Map />
  </footer>
);

const KeepConnected = () => <div>{socialLinks.map(link => <KeepConnectedItem key={link} title={link} />)}</div>;

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
