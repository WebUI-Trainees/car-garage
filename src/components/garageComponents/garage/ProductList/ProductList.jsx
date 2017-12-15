import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../../../containers/garagePage/Product';

const ProductList = ({ products }) => (
  <div className="product-list-body">
    <h2>Accessories</h2>
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isInCart: PropTypes.bool.isRequired,
      addToCart: PropTypes.func.isRequired,
      removeFromCart: PropTypes.func.isRequired
    })
  ).isRequired
};

export default ProductList;
