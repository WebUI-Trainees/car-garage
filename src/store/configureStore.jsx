import { combineReducers } from 'redux';
import DateReducer from '../reducers/date_pick';
import ItemsReducer from '../reducers/dates_list';
import CarModels from '../reducers/reducers_car_models';
import humans from '../reducers/humans';
import conversation from '../reducers/conversation';

const rootReducer = combineReducers({
  selectedDate: DateReducer,
  items: ItemsReducer,
  carModels: CarModels,
  humans,
  conversation
});

export default rootReducer;
