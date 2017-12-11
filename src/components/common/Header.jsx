import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => (
  <header>
    <Logo />
    <div className="navbar">
      <NavLink to="/" activeClassName="is-active" exact>
        Home
      </NavLink>
      <NavLink to="/garage" activeClassName="is-active">
        Garage
      </NavLink>
      <NavLink to="/drive" activeClassName="is-active">
        Test Drive
      </NavLink>
      <NavLink to="/about" activeClassName="is-active">
        About us
      </NavLink>
      <NavLink to="/models" activeClassName="is-active">
        Models
      </NavLink>
    </div>
  </header>
);

export default Header;
