import { combineReducers } from 'redux';
import DateReducer from '../reducers/date_pick';
import ItemsReducer from '../reducers/dates_list';
import CarModels from '../reducers/reducers_car_models';

const rootReducer = combineReducers({
  date: DateReducer,
  items: ItemsReducer,
  carModels: CarModels
});

export default rootReducer;
