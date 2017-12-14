import React from 'react';
import Cart from '../containers/garagePage/Cart';
import ProductList from '../containers/garagePage/ProductList';

const GaragePage = () => (
  <div className="container">
    <ProductList />
    <Cart />
  </div>
);

export default GaragePage;
