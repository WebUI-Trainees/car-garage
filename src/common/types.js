import PropTypes from 'prop-types';

export const Message = PropTypes.shape({
  who: PropTypes.string,
  text: PropTypes.string,
  time: PropTypes.string
});

export const Order = PropTypes.shape({
  time: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  cars: PropTypes.object
});

export const Car = PropTypes.shape({
  model: PropTypes.string,
  engine: PropTypes.string
});

export default PropTypes.shape({
  name: PropTypes.string,
  conversations: PropTypes.arrayOf(Message),
  orders: PropTypes.arrayOf(Order)
});
