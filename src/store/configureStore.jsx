import { combineReducers } from 'redux';
import DateReducer from '../reducers/date_pick';
import ItemsReducer from '../reducers/dates_list';

const rootReducer = combineReducers({
  selectedDate: DateReducer,
  items: ItemsReducer
});

export default rootReducer;
