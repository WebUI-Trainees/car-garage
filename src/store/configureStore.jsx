import { combineReducers } from 'redux';
import ItemReducer from '../reducers/item';
import ItemsReducer from '../reducers/dates_list';
import CarModels from '../reducers/reducers_car_models';

const rootReducer = combineReducers({
  selectedItem: ItemReducer,
  items: ItemsReducer,
  carModels: CarModels
});

export default rootReducer;
