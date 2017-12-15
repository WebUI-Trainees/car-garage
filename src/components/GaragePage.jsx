import React from 'react';
import Cart from '../containers/garagePage/Cart';
import ProductList from '../containers/garagePage/ProductList';
import GarageImg from '../containers/garagePage/img';

const GaragePage = () => (
  <div className="garage-body">
    <GarageImg />
    <div className="garage-main">
      <ProductList />
      <Cart />
    </div>
  </div>
);

export default GaragePage;
