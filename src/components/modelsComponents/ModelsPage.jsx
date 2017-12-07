import React from 'react';
import ModelsList from '../../containers/modelsPage/ModelList';
import Dropdown from '../modelsComponents/Dropdown';

const ModelsPage = () => (
  <div>
    <Dropdown />
    <ModelsList />
  </div>
);

export default ModelsPage;
