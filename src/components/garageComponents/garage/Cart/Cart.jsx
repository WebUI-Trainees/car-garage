import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => (
  <div>
    <h3>Shopping Cart</h3>

    <div>
      <div>
        <div>
          {items.length > 0 && (
            <div>{items.map(item => <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />)}</div>
          )}
          {items.length === 0 && <div>Cart is empty</div>}
          <div>
            Total: {total} {currency}
          </div>
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
