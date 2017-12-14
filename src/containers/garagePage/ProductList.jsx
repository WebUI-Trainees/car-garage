import { connect } from 'react-redux';
import ProductList from '../../components/garageComponents/garage/ProductList';
import { getProducts } from '../../reducers/products';

const mapStateToProps = (state, props) => ({
  products: getProducts(state, props)
});

export default connect(mapStateToProps)(ProductList);
