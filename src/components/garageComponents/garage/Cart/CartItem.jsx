import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, currency, onClick }) => (
  <div>
    <div>
      <button onClick={onClick}>X</button>
      <span>{name}</span>
    </div>
    <div>
      {price} {currency}
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
