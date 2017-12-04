import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

const ModelsSelect = () => (
  <div className="car-models-select">
    <Dropdown className="dropdown-wrapper">
      <DropdownTrigger className="title">All Models</DropdownTrigger>
      <DropdownContent className="items">
        <ul>
          <li>X1</li>
          <li>X2</li>
          <li>X3</li>
        </ul>
      </DropdownContent>
    </Dropdown>
  </div>
);

export default ModelsSelect;
