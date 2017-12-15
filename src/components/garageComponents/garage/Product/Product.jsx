import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  render() {
    const { name, price, currency, image, isInCart } = this.props;

    return (
      <div>
        <img src={image} alt="product" />
        <div className="product-name">
          <h3>{name}</h3>
          <div className="product-price">
            {price} {currency}
          </div>
          <div className="product-btn">
            <button className={isInCart ? 'btn-remove' : 'btn-add'} onClick={this.handleClick}>
              {isInCart ? 'REMOVE' : 'ADD'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default Product;
