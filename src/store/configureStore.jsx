import { combineReducers } from 'redux';
import DateReducer from '../reducers/date_pick';
import ItemsReducer from '../reducers/dates_list';

const rootReducer = combineReducers({
  date: DateReducer,
  items: ItemsReducer
});

export default rootReducer;
