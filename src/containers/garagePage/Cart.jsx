import { connect } from 'react-redux';
import Cart from '../../components/garageComponents/garage/Cart';
import { getItems, getCurrency, getTotal, removeFromCart } from '../../reducers/cart';

const mapStateToProps = (state, props) => ({
  items: getItems(state, props),
  currency: getCurrency(state, props),
  total: getTotal(state, props)
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
