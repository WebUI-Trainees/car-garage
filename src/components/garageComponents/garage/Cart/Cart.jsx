import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => (
  <div className="cart-body">
    <h2>Shopping Cart</h2>
    <div className="cart">
      <div className="panel-body-default">
        <div className="panel-body">
          {items.length > 0 && (
            <div className="cart-body">
              {items.map(item => <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />)}
            </div>
          )}
          {items.length === 0 && <div className="empty-cart">Cart is empty</div>}
        </div>
        <div className="cart-total">
          Total: {total} {currency}
        </div>
      </div>
    </div>
  </div>
);

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default Cart;
