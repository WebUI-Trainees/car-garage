import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, currency, onClick }) => (
  <div className="cart-item">
    <div>
      <button className="cart-btn" onClick={onClick}>
        X
      </button>
      <span className="cart-item-info">
        {name} - {price} {currency}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CartItem;
