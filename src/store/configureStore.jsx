import { combineReducers } from 'redux';
import ItemReducer from '../reducers/item';
import ItemsReducer from '../reducers/dates_list';
import CarModels from '../reducers/reducers_car_models';
import humans from '../reducers/humans';
import conversation from '../reducers/conversation';
import EventsReducer from '../reducers/events';
import cartReducer from '../reducers/cart';
import productsReducer from '../reducers/products';

const rootReducer = combineReducers({
  selectedItem: ItemReducer,
  items: ItemsReducer,
  carModels: CarModels,
  humans,
  conversation,
  events: EventsReducer,
  cart: cartReducer,
  products: productsReducer
});

export default rootReducer;
