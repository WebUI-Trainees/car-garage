import productsData from './data';

export default function products(state = productsData) {
  return state;
}

// selectors
export function getProducts(state) {
  return state.products;
}

export function getProduct(state, props) {
  return state.products.find(item => item.id === props.id);
}
