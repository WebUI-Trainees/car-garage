import React from 'react';
import ModelsList from '../../containers/modelsPage/ModelList';
import Dropdown from '../modelsComponents/Dropdown';

const ModelsPage = () => (
  <div className="container">
    <Dropdown />
    <ModelsList />
  </div>
);

export default ModelsPage;
