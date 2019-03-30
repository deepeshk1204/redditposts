import { combineReducers } from 'redux';
import tableReducer from './table';

export default combineReducers({
  table: tableReducer
});
