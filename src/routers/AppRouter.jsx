import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/common/NotFoundPage';
import Header from '../components/common/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import GaragePage from '../components/GaragePage';
import ModelsPage from '../components/modelsComponents/ModelsPage';
import TestDrivePage from '../components/testDriveComponents/TestDrivePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/garage" component={GaragePage} />
        <Route path="/drive" component={TestDrivePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/models" component={ModelsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
