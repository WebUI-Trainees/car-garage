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
    const { name, price, currency, isInCart } = this.props;

    return (
      <div>
        <div>
          <h3>{name}</h3>
          <div>
            {price} {currency}
          </div>
          <div>
            <button className={isInCart ? 'btn btn-danger' : 'btn btn-primary'} onClick={this.handleClick}>
              {isInCart ? 'Remove' : 'Add to cart'}
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
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default Product;
